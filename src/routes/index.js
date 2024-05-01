const { Router } = require('express')
const router = Router()

const userRouter = require('./userRouter')

router.post('/user', userRouter)

module.exports = router