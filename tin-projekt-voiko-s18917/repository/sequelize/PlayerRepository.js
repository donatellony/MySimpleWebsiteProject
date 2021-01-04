const Player = require("../../model/sequelize/Player");
const Tournament = require("../../model/sequelize/Tournament");
const Participation = require("../../model/sequelize/Participation");

exports.getPlayers = () => {
    return Player.findAll();
};

exports.getPlayerById = (playerId) => {
    return Player.findByPk(playerId,
        {
            include: [{
                model: Participation,
                as: 'participation',
                include: [{
                    model: Tournament,
                    as: 'tournament'
                }]
            }]
        });
};

exports.createPlayer = (newPlayerData) => {
    return Player.create({
        name: newPlayerData.name,
        rating: newPlayerData.rating,
        coins: newPlayerData.coins,
        email: newPlayerData.email,
        role: newPlayerData.role
    });
};

exports.updatePlayer = (playerId, playerData) => {
    const name = playerData.name;
    const rating = playerData.rating;
    const coins = playerData.coins;
    const email = playerData.email;
    const role = playerData.role;
    return Player.update(playerData, {where: {_id: playerId }});
};

exports.deletePlayer = (playerId) => {
    return Player.destroy({
        where: { _id: playerId }
    });

};
