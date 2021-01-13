const Sequelize = require('sequelize');

const Participation = require('../../model/sequelize/Participation');
const Player = require('../../model/sequelize/Player');
const Tournament = require('../../model/sequelize/Tournament');

exports.getParticipations = () => {
    return Participation.findAll({
        include: [
            {
                model: Player,
                as: 'player'
            },
            {
                model: Tournament,
                as: 'tournament'
            }]
    });
};


exports.getParticipationById = (participationId) => {
    return Participation.findByPk(participationId, {
        include: [
            {
                model: Player,
                as: 'player'
            },
            {
                model: Tournament,
                as: 'tournament'
            }]
    });
};

exports.createParticipation = (data) => {
    console.log(JSON.stringify(data));
    return Participation.create({
        player_id: data.player_id,
        tournament_id: data.tournament_id,
        playerPlace: data.playerPlace,
        coinsWon: data.coinsWon,
    });
};

exports.updateParticipation = (participationId, data) => {
    return Participation.update(data, {where: {_id: participationId}});
};

exports.deleteParticipation = (participationId) => {
    return Participation.destroy({
        where: {_id: participationId}
    });
};

// exports.deleteManyEmployments = (playerId, tournamentId) => {
//     return Participation.find({_id: {[Sequelize.Op.in]: employmentIds}});
// };
