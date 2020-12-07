const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');

router.get('/', playerController.showPlayerList);
router.get('/form', playerController.showAddPlayerForm);
router.get('/details', playerController.showPlayerDetails);
router.get('/edit', playerController.showPlayerEdit);

module.exports = router;