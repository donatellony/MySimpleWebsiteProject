const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');

router.get('/', playerController.showPlayerList);
router.get('/form', playerController.showAddPlayerForm);
router.get('/details/:playerId', playerController.showPlayerDetails);
router.get('/edit/:playerId', playerController.showPlayerEdit);
router.post('/add', playerController.addPlayer);
router.post('/edit', playerController.updatePlayer);
router.get('/delete/:playerId', playerController.deletePlayer);

module.exports = router;
