const { Router } = require('express');
const controller = require('../controllers/users.controller')
const authorizedHeader = require('../middlewares/auth.middleware')

const router = Router();

/**
 * Можно сделать Error Handler в роутинге напримере:
 * app.post('/testing', async (err, req, res, next) => {
    return next(new Error('Something broke again! 😱'))
})
 */

/**
 * Можем использовать отдельное мидделваре, либо в один прописать проверку на типы и управление ошибками или же в контроллере использовать в блоке catch мидделваре для ошибок, и там же в try validationErrors для express-validator
 * router.get(api, ...middlewares) 
 */

// @ GET all Objects
router.get('/users/', authorizedHeader, controller.getUsers);
router.get('/activation/:link', controller.activation)
router.get('/refresh', controller.refresh)
router.post('/sign-up', controller.signup)
router.post('/login', controller.login)
router.post('/logout', controller.logout)
router.delete('/users/', controller.deleteUsers)


module.exports = router;