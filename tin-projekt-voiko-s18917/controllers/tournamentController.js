const TournamentRepository = require('../repository/sequelize/TournamentRepository');

exports.showTournamentList = (req, res, next) => {
    TournamentRepository.getTournaments()
        .then(tournament => {
            res.render('pages/tournament/list', { tournament: tournament ,navLocation: 'tournament' });
        });
};

exports.showAddTournamentForm = (req, res, next) => {
    res.render('pages/tournament/form', {
        tournament: {},
        pageTitle: 'Nowy turniej',
        formMode: 'createNew',
        btnLabel: 'Dodaj turniej',
        formAction: '/tournaments/add',
        navLocation: 'tournament'
    });
};

exports.showTournamentDetails = (req, res, next) => {
    const tournamentId = req.params.tournamentId;
    TournamentRepository.getTournamentById(tournamentId)
        .then(tournament => {
            res.render('pages/tournament/form', {
                tournament: tournament,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły turnieju',
                formAction: '',
                navLocation: 'tournament'
            });
        });
};

exports.showTournamentEdit = (req, res, next) => {
    const tournamentId = req.params.tournamentId;
    TournamentRepository.getTournamentById(tournamentId)
        .then(tournament => {
            res.render('pages/tournament/form', {
                tournament: tournament,
                formMode: 'edit',
                pageTitle: 'Edycja turnieju',
                btnLabel: 'Edytuj turniej',
                formAction: '/tournaments/edit',
                navLocation: 'tournament'
            });
        });
};

exports.addTournament = (req, res, next) => {
    const tournamentData = {...req.body};
    console.log('STARTDATE: ' + tournamentData.startDate);
    TournamentRepository.createTournament(tournamentData)
        .then(result => {
            res.redirect('/tournaments');
        });
};

exports.updateTournament = (req, res, next) => {
    const tournamentId = req.body._id;
    const tournamentData = {...req.body};
    TournamentRepository.updateTournament(tournamentId, tournamentData)
        .then(result => {
            res.redirect('/tournaments');
        });
};

exports.deleteTournament = (req, res, next) => {
    const tournamentId = req.params.tournamentId;
    TournamentRepository.deleteTournament(tournamentId)
        .then(() => {
            res.redirect('/tournaments');
        });
};
