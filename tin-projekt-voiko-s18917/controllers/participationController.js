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
                formAction: '/participations/add',
                allPlayers: allPlayers,
                allTournaments: allTournaments,
                navLocation: 'participation'
            });
        });

};

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
    const participationId = req.params.participationId;
    let allPlayers, allTournaments;
    PlayerRepository.getPlayers()
        .then(pls => {
            allPlayers = pls;
            return TournamentRepository.getTournaments();
        })
        .then(trs => {
            allTournaments = trs;
            return ParticipationRepository.getParticipationById(participationId);
        })
        .then(prtsp => {
            res.render('pages/participation/form', {
                prtsp: prtsp,
                allPlayers: allPlayers,
                allTournaments: allTournaments,
                formMode: 'edit',
                pageTitle: 'Edycja uczęstnictwa',
                btnLabel: 'Edytuj uczęstnictwo',
                formAction: '/participations/edit',
                navLocation: 'participation'
            });
        });
};

exports.addParticipation = (req, res, next) => {
    const participationData = {...req.body};
    ParticipationRepository.createParticipation(participationData)
        .then(result => {
            res.redirect('/participations');
        });
};

exports.updateParticipation = (req, res, next) => {
    const participationId = req.body._id;
    const participationData = {...req.body};
    // console.log('======DATA=====\n'+participationData.player_id + "\n" + participationData.tournament_id);
    ParticipationRepository.updateParticipation(participationId, participationData)
        .then(result => {
            res.redirect('/participations');
        });
};

exports.deleteParticipation = (req, res, next) => {
    const participationId = req.params.participationId;
    ParticipationRepository.deleteParticipation(participationId)
        .then(() => {
            res.redirect('/participations');
        });
};
