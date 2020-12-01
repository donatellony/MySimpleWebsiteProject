const express = require('express');
const router = express.Router();
const employeeControler = require('../controllers/playerController');

router.get('/', employeeControler.showPlayerList);
router.get('/form', employeeControler.showAddPlayerForm);
router.get('/details', employeeControler.showPlayerDetails);
router.get('/edit', employeeControler.showPlayerEdit);

module.exports = router;