const { Router } = require('express')
const userController = require('../controller/userController.js')

const userRouter = Router()
const userControllerInit = new userController()

userRouter.post('/cadastro', userControllerInit.createUser)

module.exports = userRouter