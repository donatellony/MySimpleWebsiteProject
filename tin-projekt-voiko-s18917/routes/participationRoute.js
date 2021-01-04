const express = require('express');
const router = express.Router();
const participationController = require('../controllers/participationController');

router.get('/', participationController.showParticipationList);
router.get('/form', participationController.showAddParticipationForm);
router.get('/details/tournaments/:tournamentId/players/:playerId', participationController.showParticipationDetails);
router.get('/edit/tournaments/:tournamentId/players/:playerId', participationController.showParticipationEdit);

module.exports = router;
