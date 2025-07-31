const express = require('express');
const router = express.Router();
const feedbackController = require('../controller/feedbackController');
const { validateFeedback } = require('../middleware/validation');


// Public routes
router.post('/', validateFeedback, feedbackController.createFeedback);
router.get('/', feedbackController.getAllFeedbacks);
router.get('/:id', feedbackController.getFeedback);
router.delete('/:id', feedbackController.deleteFeedback);

module.exports = router;