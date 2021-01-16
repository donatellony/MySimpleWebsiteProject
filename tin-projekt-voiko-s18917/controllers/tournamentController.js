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
        navLocation: 'tournament',
        validationErrors: []
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
                navLocation: 'tournament',
                validationErrors: []
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
                navLocation: 'tournament',
                validationErrors: []
            });
        });
};

exports.addTournament = (req, res, next) => {
    const tournamentData = {...req.body};
    if(tournamentData.endDate === '')
        tournamentData.endDate = null;
    TournamentRepository.createTournament(tournamentData)
        .then(result => {
            res.redirect('/tournaments');
        })
        .catch(err => {
            res.render('pages/tournament/form', {
                tournament: tournamentData,
                pageTitle: 'Nowy turniej',
                formMode: 'createNew',
                btnLabel: 'Dodaj turniej',
                formAction: '/tournaments/add',
                navLocation: 'tournament',
                validationErrors: err.errors
            });
        })
};

exports.updateTournament = (req, res, next) => {
    const tournamentId = req.body._id;
    const tournamentData = {...req.body};
    TournamentRepository.updateTournament(tournamentId, tournamentData)
        .then(result => {
            res.redirect('/tournaments');
        })
        .catch(err => {
            res.render('pages/tournament/form', {
                tournament: tournamentData,
                formMode: 'edit',
                pageTitle: 'Edycja turnieju',
                btnLabel: 'Edytuj turniej',
                formAction: '/tournaments/edit',
                navLocation: 'tournament',
                validationErrors: err.errors
            });
        })
};

exports.deleteTournament = (req, res, next) => {
    const tournamentId = req.params.tournamentId;
    TournamentRepository.deleteTournament(tournamentId)
        .then(() => {
            res.redirect('/tournaments');
        });
};
