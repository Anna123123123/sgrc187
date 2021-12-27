const { Router } = require('express');
const controller = require('../controllers/documents.controller')
const router = Router();


/*****************
** REST API ******
******************/


//@ GET /create-pdf
router.get('/workflow/categorization-commission', controller.fetchCommissionOrderPdf);

//@ CREATE /fetch-pdf
router.post('/workflow/categorization-commission', controller.createCommissionOrderPdf);



module.exports = router