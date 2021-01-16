const PlayerRepository = require('../repository/sequelize/PlayerRepository');

exports.showPlayerList = (req, res, next) => {
    PlayerRepository.getPlayers()
        .then(pls => {
            res.render('pages/player/list', {pls: pls, navLocation: 'player'});
        });
};

exports.showAddPlayerForm = (req, res, next) => {
    res.render('pages/player/form', {
        player: {},
        pageTitle: 'Nowy gracz',
        formMode: 'createNew',
        btnLabel: 'Dodaj gracza',
        formAction: '/players/add',
        navLocation: 'player',
        validationErrors: []
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
                navLocation: 'player',
                validationErrors: []
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
                navLocation: 'player',
                validationErrors: []
            });
        });
};

exports.addPlayer = (req, res, next) => {
    const playerData = {...req.body};
    PlayerRepository.createPlayer(playerData)
        .then(result => {
            res.redirect('/players');
        })
        .catch(err => {
            err.errors.forEach(e => {
                if(e.path.includes('email') && e.type == 'unique violation') {
                    e.message = "Podany adres email jest już używany";
                }
                console.log("MSG:" + e.message);
            });
            res.render('pages/player/form', {
                player: playerData,
                pageTitle: 'Nowy gracz',
                formMode: 'createNew',
                btnLabel: 'Dodaj gracza',
                formAction: '/players/add',
                navLocation: 'player',
                validationErrors: err.errors
            });
    });
};

exports.updatePlayer = (req, res, next) => {
    const playerId = req.body._id;
    const playerData = {...req.body};
    PlayerRepository.updatePlayer(playerId, playerData)
        .then(result => {
            res.redirect('/players');
        })
        .catch(err => {
            err.errors.forEach(e => {
                if(e.path.includes('email') && e.type == 'unique violation') {
                    e.message = "Podany adres email jest już używany";
                }
            });
            res.render('pages/player/form', {
                player: playerData,
                formMode: 'edit',
                pageTitle: 'Edycja gracza',
                btnLabel: 'Edytuj gracza',
                formAction: '/players/edit',
                navLocation: 'player',
                validationErrors: err.errors
            });
        });
};

exports.deletePlayer = (req, res, next) => {
    const playerId = req.params.playerId;
    PlayerRepository.deletePlayer(playerId)
        .then(() => {
            res.redirect('/players');
        });
};
