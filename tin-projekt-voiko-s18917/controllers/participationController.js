const ParticipationRepository = require("../repository/sequelize/ParticipationRepository");

exports.showParticipationList = (req, res, next) => {
    ParticipationRepository.getParticipations()
        .then(prtsps => {
            res.render('pages/participation/list', {prtsps: prtsps,navLocation: 'participation'});
        });
};

exports.showAddParticipationForm = (req, res, next) => {
    res.render('pages/participation/form', {navLocation: 'participation'});
};

// exports.showParticipationDetails = (req, res, next) => {
//     res.render('pages/participation/details', {navLocation: 'participation'});
// };
exports.showParticipationDetails = (req, res, next) => {
    const playerId = req.params.playerId;
    const tournamentId = req.params.tournamentId;
    ParticipationRepository.getParticipationById(playerId,tournamentId)
        .then(prtsp => {
            res.render('pages/player/form', {
                prtsp: prtsp,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły uczęstnictwa',
                formAction: '',
                navLocation: 'participation'
            });
        });
};

exports.showParticipationEdit = (req, res, next) => {
    res.render('pages/participation/edit', {navLocation: 'participation'});
};
