const { Router } = require('require')
const MoviesController = require('../controller/moviesController')

const router = Router()
const moviesController = MoviesController()

router.post('/movies', moviesController.createMovie)
router.get('/movies', moviesController)
router.put('/movies', moviesController)
router.delete('/movies', moviesController)

module.exports = router