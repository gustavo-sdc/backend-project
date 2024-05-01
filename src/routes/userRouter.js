const { Router } = require('express')
const userController = require('../controller/userController.js')

const userRouter = Router()
const userControllerInit = new userController()

userRouter.post('/user', userControllerInit.createUser)
userRouter.put('/user', userControllerInit.updateUser)
userRouter.get('/user/:id', userControllerInit.showUser)
userRouter.delete('/user/:id', userControllerInit.deleteUser)

module.exports = userRouter