exports.showParticipationList = (req, res, next) => {
    res.render('pages/participation/list', { navLocation: 'participation' });
};

exports.showAddParticipationForm = (req, res, next) => {
    res.render('pages/participation/form', { navLocation: 'participation' });
};

exports.showParticipationDetails = (req, res, next) => {
    res.render('pages/participation/details', { navLocation: 'participation' });
};

exports.showParticipationEdit = (req, res, next) => {
    res.render('pages/participation/edit', { navLocation: 'participation' });
};