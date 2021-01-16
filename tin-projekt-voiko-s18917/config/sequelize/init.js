const sequelize = require('./sequelize');

const Player = require('../../model/sequelize/Player');
const Tournament = require('../../model/sequelize/Tournament');
const Participation = require('../../model/sequelize/Participation');

module.exports = () => {
    Player.hasMany(Participation, {
        as: 'participation',
        foreignKey: {name: 'player_id', allowNull: false},
        constraints: true,
        onDelete: 'CASCADE'
    });
    Participation.belongsTo(Player, {as: 'player', foreignKey: {name: 'player_id', allowNull: false}});
    Tournament.hasMany(Participation, {
        as: 'participation',
        foreignKey: {name: 'tournament_id', allowNull: false},
        constraints: true,
        onDelete: 'CASCADE'
    });
    Participation.belongsTo(Tournament, {as: 'tournament', foreignKey: {name: 'tournament_id', allowNull: false}});

    let allPlayers, allTournaments;
    sequelize.sync({force: true})
        .then(() => Player.findAll())
        .then(players => {
                if (!players || players.length === 0) {
                    return Player.bulkCreate([
                        {name: 'Jan', rating: 1962, coins: 415, email: 'jan.kowalski@acme.com', role: 'gracz'},
                        {name: 'Sausage', rating: 2534, coins: 300, email: 'sauuusage123@acme.com', role: 'gracz'},
                        {name: 'Yehor', rating: 2077, coins: 300, email: 's18917@pjwstk.edu.pl', role: 'moderator'},
                    ]).then(() => {
                        return Player.findAll();
                    });
                } else {
                    return players;
                }
            }
        )
        .then(players => {
            allPlayers = players;
            return Tournament.findAll();
        })
        .then(tournaments => {
            if (!tournaments || tournaments.length === 0) {
                return Tournament.bulkCreate([
                    {name: 'Unreal Tournament', startDate: '2001-01-01', endDate: '2001-01-02', fund: 5000},
                    {
                        name: 'Eat now cry later',
                        sponsor: 'Burger Queen',
                        startDate: '2020-03-22',
                        endDate: null,
                        fund: 75000
                    }
                ]).then(() => {
                    return Tournament.findAll();
                });
            } else {
                return tournaments;
            }
        })
        .then(tournaments => {
            allTournaments = tournaments;
            return Participation.findAll();
        })
        .then(prtcp => {
            if (!prtcp || prtcp.length === 0) {
                return Participation.bulkCreate([
                    {
                        player_id: allPlayers[0]._id,
                        tournament_id: allTournaments[0]._id,
                        playerPlace: 1,
                        coinsWon: 2500
                    },
                    {
                        player_id: allPlayers[1]._id,
                        tournament_id: allTournaments[0]._id,
                        playerPlace: 2,
                        coinsWon: 1000
                    },
                    {
                        player_id: allPlayers[1]._id,
                        tournament_id: allTournaments[1]._id,
                        playerPlace: 1,
                        coinsWon: 50000
                    }
                ]);
            } else {
                return prtcp;
            }
        });
};
