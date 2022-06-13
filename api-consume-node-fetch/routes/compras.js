//MechantId: 96a001a9-2f02-4b0e-909d-5f0b51f8d86b
//MerchantKey: KMWNYEPFWPFOKRQLARTVGACIOGZXUWTKAPHEWQXS

var express = require('express');
var router = express.Router();

/* POST criacao de compra. */
router.post('/', function(req, res, next) {
  res.send('executando');
});

/* GET status de compra. */
router.get('/:compra_id/status', function(req, res, next) {
  res.send('status');
});

module.exports = router;
