const TournamentRepository = require('../repository/sequelize/TournamentRepository');

exports.showTournamentList = (req, res, next) => {
    TournamentRepository.getTournaments()
        .then(trnt => {
            res.render('pages/tournament/list', { trnt: trnt,navLocation: 'tournament' });
        });
};

exports.showAddTournamentForm = (req, res, next) => {
    res.render('pages/tournament/form', { navLocation: 'tournament' });
};

exports.showTournamentDetails = (req, res, next) => {
    res.render('pages/tournament/details', { navLocation: 'tournament' });
};

exports.showTournamentEdit = (req, res, next) => {
    res.render('pages/tournament/edit', { navLocation: 'tournament' });
};
