const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  email: { type: String, required: false, unique: true },
  name: { type: String, required: true }, // Hashed password
  phone:{type:Number,required: true},
  isActive: { type: Boolean, default: true },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', feedbackSchema);