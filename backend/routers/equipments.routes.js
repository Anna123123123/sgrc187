const { Router } = require('express');
const controller = require('../controllers/equipments.controller')

const router = Router();


// * REST API

//@ GET ALL companies
router.get('/equipments/', controller.getEquipments);

//@ CREATE new companie
router.post('/equipments/', controller.createEquipments);

//@ DELETE by id companie
router.delete('/equipments/:id', controller.deleteEquipments);

//@ UPDATE by id companie
router.patch('/equipments/:id', controller.updateEquipments);

// router.post('/personnel/', controller.addToPersonnel);

module.exports = router