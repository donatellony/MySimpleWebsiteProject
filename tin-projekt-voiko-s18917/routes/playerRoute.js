const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');

router.get('/', playerController.showPlayerList);
router.get('/form', playerController.showAddPlayerForm);
router.get('/details/:playerId', playerController.showPlayerDetails);
router.get('/edit/:playerId', playerController.showPlayerEdit);

module.exports = router;
