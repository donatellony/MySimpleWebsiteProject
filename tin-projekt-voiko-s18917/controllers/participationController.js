const ParticipationRepository = require("../repository/sequelize/ParticipationRepository");
const PlayerRepository = require("../repository/sequelize/PlayerRepository");
const TournamentRepository = require("../repository/sequelize/TournamentRepository");

exports.showParticipationList = (req, res, next) => {
    ParticipationRepository.getParticipations()
        .then(prtsps => {
            res.render('pages/participation/list', {prtsps: prtsps, navLocation: 'participation'});
        });
};

exports.showAddParticipationForm = (req, res, next) => {
    let allPlayers, allTournaments;
    PlayerRepository.getPlayers()
        .then(pls => {
            allPlayers = pls;
            return TournamentRepository.getTournaments();
        })
        .then(trs => {
            allTournaments = trs;
            res.render('pages/participation/form', {
                prtsp: {},
                pageTitle: 'Dodanie uczęstnictwa',
                formMode: 'showAdd',
                formAction: '',
                allPlayers: allPlayers,
                allTournaments: allTournaments,
                navLocation: 'participation'
            });
        });

};

// exports.showParticipationDetails = (req, res, next) => {
//     res.render('pages/participation/details', {navLocation: 'participation'});
// };
exports.showParticipationDetails = (req, res, next) => {
    const participationId = req.params.participationId;
    ParticipationRepository.getParticipationById(participationId)
        .then(prtsp => {
            res.render('pages/participation/form', {
                prtsp: prtsp,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły uczęstnictwa',
                formAction: '',
                navLocation: 'participation'
            });
        });
};

exports.showParticipationEdit = (req, res, next) => {
    res.render('pages/participation/form', {navLocation: 'participation'});
};
