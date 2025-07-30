const Feedback = require('../models/feedbackSchema');

// Create feedback
exports.createFeedback = async (req, res) => {
  try {
    const { email, name, phone } = req.body;

    const feedback = new Feedback({ email, name, phone });
    await feedback.save();

    res.status(201).json({ message: 'Feedback submitted successfully', data: feedback });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Email already exists' });
    }
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get all feedbacks
exports.getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find({ isDeleted: false });
    res.json({ data: feedbacks });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get feedback by ID
exports.getFeedbackById = async (req, res) => {
  try {
    const feedback = await Feedback.findById(req.params.id);
    if (!feedback || feedback.isDeleted) {
      return res.status(404).json({ message: 'Feedback not found' });
    }
    res.json({ data: feedback });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Update feedback
exports.updateFeedback = async (req, res) => {
  try {
    const { email, name, phone } = req.body;

    const feedback = await Feedback.findByIdAndUpdate(
      req.params.id,
      { email, name, phone },
      { new: true, runValidators: true }
    );

    if (!feedback || feedback.isDeleted) {
      return res.status(404).json({ message: 'Feedback not found' });
    }

    res.json({ message: 'Feedback updated', data: feedback });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
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
      return res.status(404).json({ message: 'Feedback not found' });
    }

    res.json({ message: 'Feedback deleted (soft)', data: feedback });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
