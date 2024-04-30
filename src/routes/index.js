const { Router } = require('express')
const router = Router()

const userRouter = require('./userRouter')

router.post('/cadastro', userRouter)

module.exports = router