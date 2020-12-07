const express = require('express');
const router = express.Router();
const tournamentController = require('../controllers/tournamentController');

router.get('/', tournamentController.showTournamentList);
router.get('/form', tournamentController.showAddTournamentForm);
router.get('/details', tournamentController.showTournamentDetails);
router.get('/edit', tournamentController.showTournamentEdit);

module.exports = router;