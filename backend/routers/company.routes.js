const express = require('express');
const controller = require('../controllers/company.controller')

const router = express.Router();

/*****************
** REST API ******
******************/

//@ GET ALL companies
router.get('/company/', controller.getCompany);
//@ CREATE new companie
router.post('/company/', controller.createCompany);
//@ DELETE by id companie
router.delete('/company/:id', controller.deleteCompany);
//@ UPDATE by id companie
router.patch('/company/:id', controller.updateCompany);

router.post('/personnel/', controller.addToPersonnel);

module.exports = router