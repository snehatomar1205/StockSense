const express = require('express');
const router = express.Router();
const controller = require('../controllers/clothingBillingController');

router.post('/log', controller.Billing);
router.get('/all', controller.getBillingHistory);
router.get('/sales-data', controller.getSalesData);

module.exports = router;
