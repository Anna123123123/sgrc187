const { Router } = require('express');
const controller = require('../controllers/personnel.controller')

// new express.Router()
const router = Router();

//Example route (where) and .get/.delete methods
//router.route('/path').get((req,res)=> {
// })


// REST API 
// router.route('/')

// @ GET all
router.get('/', controller.getPersonnels);

//@ GET by ID
router.get('/:id', controller.getPersonnel);

//was .put
//@ EDIT by ID
router.patch('/:id', controller.updatePersonnel);

//@ CREATE new ID
router.post('/', controller.createPersonnel);

//@ DELETE
router.delete('/:id', controller.deletePersonnel);


// router.param('id', (req, res, next, val) => {
//     console.log(`SOME SOME information ${id}`)
//     next();
// })

// new approach
// router
//     .route('/')
//     .get(controller.getPersonnel)
//     .post(controller.createPersonnel);


// router
//     .route(':/id')
//     .patch(controller.updatePersonnel)
//     .delete(controller.deletePersonnel);


module.exports = router;