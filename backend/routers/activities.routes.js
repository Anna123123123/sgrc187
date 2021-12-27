const express = require('express');
const controller = require('../controllers/activities.controller');
const router = express.Router();
/*****************
** REST API ******
******************/
//@ GET ALL companies
router.get('/activities/', controller.getActivities);
//@ CREATE new companie
router.post('/activities/', controller.createActivities);
//@ DELETE by id companie
router.delete('/activities/:id', controller.deleteActivities);
//@ UPDATE by id companie
router.patch('/activities/:id', controller.updateActivities);

module.exports = router

