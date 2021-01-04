const PlayerRepository = require('../repository/sequelize/PlayerRepository');

exports.showPlayerList = (req, res, next) => {
    PlayerRepository.getPlayers()
        .then(pls => {
            res.render('pages/player/list', { pls: pls, navLocation: 'player' });
        });
};

exports.showAddPlayerForm = (req, res, next) => {
    res.render('pages/player/form', {
        player: {},
        pageTitle: 'Nowy gracz',
        formMode: 'createNew',
        btnLabel: 'Dodaj gracza',
        formAction: '/players/add',
        navLocation: 'player'
    });
};

exports.showPlayerDetails = (req, res, next) => {
    const playerId = req.params.playerId;
    PlayerRepository.getPlayerById(playerId)
        .then(player => {
            res.render('pages/player/form', {
                player: player,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły gracza',
                formAction: '',
                navLocation: 'player'
            });
        });
};

exports.showPlayerEdit = (req, res, next) => {
    const playerId = req.params.playerId;
    PlayerRepository.getPlayerById(playerId)
        .then(player => {
            res.render('pages/player/form', {
                player: player,
                formMode: 'edit',
                pageTitle: 'Edycja gracza',
                btnLabel: 'Edytuj gracza',
                formAction: '/players/edit',
                navLocation: 'player'
            });
        });
};

