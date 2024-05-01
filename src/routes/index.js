const { Router } = require('express')
const router = Router()

const userRouter = require('./userRouter')
const movieRouter = require('./moviesRouter')
const tagsRouter = require('./moviesRouter')


router.post('/user', userRouter)
router.put('/user', userRouter)
router.get('/user/:id', userRouter)
router.delete('/user/:id', userRouter)

router.post('/movies', movieRouter)
router.put('/movies', movieRouter)
router.get('./movies', movieRouter)
router.delete('/movies', movieRouter)


module.exports = router