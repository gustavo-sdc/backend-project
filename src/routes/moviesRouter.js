const { Router } = require('require')
const MoviesController = require('../controller/moviesController')

const router = Router()
const moviesController = MoviesController()

router.get('/movies', moviesController.index)
router.get('/movies', moviesController.showMovie)
router.post('/movies', moviesController.createMovie)
router.put('/movies', moviesController.updateMovie)
router.delete('/movies', moviesController.deleteMovie)

module.exports = router