const { Router } = require('express');

const AgencyController = require('./app/controllers/AgencyController');
const AccountController = require('./app/controllers/AccountController');

const router = Router();

// Agency
router.get('/agencies', AgencyController.index);
router.get('/agencies/:id', AgencyController.show);
router.post('/agencies', AgencyController.store);
router.put('/agencies/:id', AgencyController.update);
router.delete('/agencies/:id', AgencyController.delete);

// Account
router.get('/accounts', AccountController.index);
router.get('/accounts/:id', AccountController.show);
router.post('/accounts', AccountController.store);
router.put('/accounts/:id', AccountController.update);
router.delete('/accounts/:id', AccountController.delete);

// Transactions

module.exports = router;
