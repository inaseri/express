const express = require('express');
const router = express.Router();

const customersCtrl = require("../controllers/customer.controller.js");

const authentication = require('../middleware/auth');

router.post('/customers', authentication,customersCtrl.create);
router.get('/customers', authentication,customersCtrl.findAll);
router.get("/customers/:customerId", authentication,customersCtrl.findOne);
router.put("/customers/:customerId", authentication,customersCtrl.update);
router.delete("/customers/:customerId", authentication,customersCtrl.delete);
router.delete("/customers", authentication,customersCtrl.deleteAll);

module.exports = router;
