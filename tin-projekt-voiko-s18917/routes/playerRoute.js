const express = require('express');
const router = express.Router();
const employeeControler = require('../controllers/playerController');

router.get('/', employeeControler.showPlayerList);
router.get('/add', employeeControler.showAddPlayerForm);
router.get('/details/:playerId', employeeControler.showPlayerDetails);

module.exports = router;