const express = require('express');
const router = express.Router();
const participationController = require('../controllers/participationController');

router.get('/', participationController.showParticipationList);
router.get('/form', participationController.showAddParticipationForm);
router.get('/details', participationController.showParticipationDetails);
router.get('/edit', participationController.showParticipationEdit);

module.exports = router;