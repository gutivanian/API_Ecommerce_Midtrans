const express = require('express');
const router = express.Router();
const { getPayments, createPayment, checkTransactionStatus } = require('../controllers/paymentController');

router.get('/', getPayments);
router.post('/', createPayment);
router.get('/:order_number', checkTransactionStatus);
router.post('/midtrans-notification', webhookController.handleWebhook);

module.exports = router;
