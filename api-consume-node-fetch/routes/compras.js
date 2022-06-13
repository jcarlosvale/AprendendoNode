//MechantId: 96a001a9-2f02-4b0e-909d-5f0b51f8d86b
//MerchantKey: KMWNYEPFWPFOKRQLARTVGACIOGZXUWTKAPHEWQXS

var express = require('express');
var router = express.Router();
var cielo = require('../lib/cielo');

/* POST criacao de compra. */
router.post('/', function(req, res, next) {
  
  cielo
    .compra(req.body)
    .then((result) => {
      if (!result.Payment.Capture) {
        cielo.captura(result.Payment.PaymentId).then((result) => {
          res.send(result);
        });  
      } else {
        console.log("Status " + result.Payment.Status);
        if (result.Payment.Status == 3) {
          res.status(201).send({
            "Status": "Sucesso",
            "Message": "Compra realizada com sucesso",
            "CompraId": result.Payment.PaymentId
          });
        } else {
          res.status(402).send({
            "Status": "Falhou",
            "Message": "Compra não realizada"
          });
        }
      }
    }).catch((err) => {console.error(err)});
});

/* GET status de compra. */
router.get('/:compra_id/status', function(req, res, next) {
  cielo.consulta(req.params.compra_id).then((result) => {
    console.log("Status consulta " + result.Payment.Status);
    let message = {};
    switch(result.Payment.Status) {
      case 1: 
        message = {
          "Status": "Pagamento autorizado",
        };
        break;
      case 2: 
        message = {
          "Status": "Pagamento realizado",
        };
        break;
      case 3: 
        message = {
          "Status": "Pagamento pendente",
        };
        break;
      default:
        message = {
          "Status": "Pagamento falhou",
        };
    }

    res.send(message);
  });
});

module.exports = router;
