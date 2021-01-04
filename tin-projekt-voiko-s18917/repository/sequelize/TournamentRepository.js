const Player = require("../../model/sequelize/Player");
const Tournament = require("../../model/sequelize/Tournament");
const Participation = require("../../model/sequelize/Participation");

exports.getTournaments = () => {
    return Tournament.findAll();
};

exports.getTournamentById = (tournamentId) => {
    return Tournament.findByPk(tournamentId,
        {
            include: [{
                model: Participation,
                as: 'participation',
                include: [{
                    model: Player,
                    as: 'player'
                }]
            }]
        });
};

exports.createTournament = (newTournamentData) => {
    return Tournament.create({
        name: newTournamentData.name,
        sponsor: newTournamentData.sponsor,
        startDate: newTournamentData.startDate,
        endDate: newTournamentData.endDate,
        fund: newTournamentData.fund
    });
};

exports.updateTournament = (tournamentId, TournamentData) => {
    const name = TournamentData.name;
    const sponsor = TournamentData.sponsor;
    const startDate = TournamentData.startDate;
    const endDate = TournamentData.endDate;
    const fund = TournamentData.fund;
    return Tournament.update(TournamentData, {where: {_id: tournamentId }});
};

exports.deleteTournament = (tournamentId) => {
    return Tournament.destroy({
        where: { _id: tournamentId }
    });

};
