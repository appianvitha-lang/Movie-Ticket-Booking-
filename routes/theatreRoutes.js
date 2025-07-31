const express = require('express');
const router = express.Router();
const theatreController = require('../controllers/theatreController');
const { authorize } = require('../middleware/authMiddleware');

router.post('/', authorize('admin'), theatreController.createTheatre);
router.get('/', theatreController.getAllTheatres);

module.exports = router;
