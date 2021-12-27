const express = require('express');
const controller = require('../controllers/it-assets.controller')

// new express.Router()
const router = express.Router();

//Example route (where) and .get/.delete methods
//router.route('/path').get((req,res)=> {
// })


//REST API
//@ GET
router.get('/itAssets/', controller.getAsset);

//@ GET by ID
// router.get('/:id', controller.getTest);

//was .put
//@ EDIT by ID
router.patch('/itAssets/:id', controller.updateAsset);

//@ CREATE new ID
router.post('/itAssets/', controller.createAsset);

//@ DELETE
router.delete('/itAssets/:id', controller.deleteAsset);

module.exports = router;