exports.showPlayerList = (req, res, next) => {
    res.render('pages/employee/list', {});
};

exports.showAddPlayerForm = (req, res, next) => {
    res.render('pages/employee/form', {});
};

exports.showPlayerDetails = (req, res, next) => {
    res.render('pages/employee/details', {});
};