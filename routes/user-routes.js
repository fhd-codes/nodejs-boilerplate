//importing modules
const express = require('express')
const userController = require('../controllers/user-controller')

const { signup, login } = userController

const userAuth = require('../middlewares/user-auth')

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
router.post('/signup', userAuth.checkExistance, signup);

//login route
router.post('/login', login );

module.exports = router