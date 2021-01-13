const express = require('express');
const router = express.Router();
const participationController = require('../controllers/participationController');

router.get('/', participationController.showParticipationList);
router.get('/form', participationController.showAddParticipationForm);
router.get('/details/:participationId', participationController.showParticipationDetails);
router.get('/edit/:participationId', participationController.showParticipationEdit);
router.post('/add', participationController.addParticipation);
router.post('/edit', participationController.updateParticipation);
router.get('/delete/:participationId', participationController.deleteParticipation);

module.exports = router;
