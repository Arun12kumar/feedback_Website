const Feedback = require('../models/feedbackSchema');
const { validationResult } = require('express-validator');

// Create new feedback
exports.createFeedback = async (req, res) => {
  try {
    // Validate request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Create new feedback document
    const feedback = new Feedback(req.body);
    await feedback.save();

    res.status(201).json({
      status: 'success',
      data: {
        feedback
      }
    });
  } catch (err) {
    console.error('Error creating feedback:', err);
    res.status(500).json({
      status: 'error',
      message: 'Failed to submit feedback',
      error: process.env.NODE_ENV === 'development' ? err : undefined
    });
  }
};

// Get all feedbacks (for admin purposes)
exports.getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find({ isDeleted: false })
      .sort({ createdAt: -1 });

    res.status(200).json({
      status: 'success',
      results: feedbacks.length,
      data: {
        feedbacks
      }
    });
  } catch (err) {
    console.error('Error fetching feedbacks:', err);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch feedbacks'
    });
  }
};

// Get single feedback by ID
exports.getFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.findOne({
      _id: req.params.id,
      isDeleted: false
    });

    if (!feedback) {
      return res.status(404).json({
        status: 'fail',
        message: 'Feedback not found'
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        feedback
      }
    });
  } catch (err) {
    console.error('Error fetching feedback:', err);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch feedback'
    });
  }
};

// Soft delete feedback
exports.deleteFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.findByIdAndUpdate(
      req.params.id,
      { isDeleted: true },
      { new: true }
    );

    if (!feedback) {
      return res.status(404).json({
        status: 'fail',
        message: 'Feedback not found'
      });
    }

    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    console.error('Error deleting feedback:', err);
    res.status(500).json({
      status: 'error',
      message: 'Failed to delete feedback'
    });
  }
};