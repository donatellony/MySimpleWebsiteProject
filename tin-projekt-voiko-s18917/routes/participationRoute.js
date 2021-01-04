const express = require('express');
const router = express.Router();
const participationController = require('../controllers/participationController');

router.get('/', participationController.showParticipationList);
router.get('/form', participationController.showAddParticipationForm);
router.get('/details/:participationId', participationController.showParticipationDetails);
router.get('/edit/:participationId', participationController.showParticipationEdit);

module.exports = router;
