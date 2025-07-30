const express = require('express');
const mongoose = require('mongoose');
const feedbackRoutes = require('./src/routes/feedbackRoutes');
const authRoutes = require('./src/routes/authRoutes');
require('dotenv').config();


const app = express();

app.use(express.json());

// MongoDB connect (replace with your updated URL)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Routes
app.use('/api/feedbacks', feedbackRoutes);
app.use('/api/auth', authRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
