const express = require('express');
const router = express.Router();

const customersCtrl = require("../controllers/customer.controller.js");

router.post('/customers', customersCtrl.create);
router.get('/customers', customersCtrl.findAll);
router.get("/customers/:customerId", customersCtrl.findOne);
router.put("/customers/:customerId", customersCtrl.update);
router.delete("/customers/:customerId", customersCtrl.delete);
router.delete("/customers", customersCtrl.deleteAll);

module.exports = router;
