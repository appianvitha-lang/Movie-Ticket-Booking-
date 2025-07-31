const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');
const { authorize } = require('../middleware/authMiddleware');

router.post('/', authorize('admin'), movieController.createMovie);
router.get('/', movieController.getAllMovies);
router.put('/:id', authorize('admin'), movieController.updateMovie);
router.delete('/:id', authorize('admin'), movieController.deleteMovie);

module.exports = router;
