const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  // User Details
  name: { type: String, required: true },
  email: { type: String, required: false },
  phone: { type: String, required: true }, // Using String to preserve formatting
  referralSource: { type: String },
  address: { type: String },
  preferredContactMethods: [{ type: String, enum: ['phone', 'whatsapp'] }],
  
  // Company Details
  businessName: { type: String, required: true },
  businessEmail: { type: String },
  contact: { type: String, required: true }, // Company contact number
  websiteUrl: { type: String },
  businessType: [{ 
    type: String,
    enum: [
      'E-commerce',
      'Healthcare & Wellness',
      'Education & eLearning',
      'Finance & Fintech',
      'Logistics & Transportation',
      'Real Estate & Property Management',
      'Travel & Hospitality',
      'Retail & Point of Sale',
      'Construction & Infrastructure',
      'Entertainment & Media',
      'Legal Services',
      'Manufacturing & Automation',
      'NGOs & Social Enterprises',
      'Startups & Tech Innovators',
      'Marketing & Advertising Agencies'
    ]
  }],
  companySize: {
    type: String,
    enum: [
      '1-10',
      '11-50',
      '51-200',
      '201-500',
      '501-1000',
      '1001-5000',
      '5001-10000',
      '10000+'
    ]
  },
  aboutBusiness: { type: String },
  
  // Service Details
  servicesNeeded: [{
    type: String,
    enum: [
      'UI/UX Design',
      'Website Development',
      'Mobile App Development',
      'Custom Software',
      'Branding & Logo Design',
      'E-commerce Solutions',
      'SEO & Digital Marketing',
      'Maintenance & Support'
    ]
  }],
  projectBudget: {
    type: String,
    enum: ['<25k', '25k-50k', '50k-1L', '1L+']
  },
  expectedTimeline: { type: String },
  projectDescription: { type: String },
  
  // System Fields
  isActive: { type: Boolean, default: true },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Add index for better query performance
feedbackSchema.index({ email: 1 });
feedbackSchema.index({ phone: 1 });
feedbackSchema.index({ businessName: 1 });
feedbackSchema.index({ createdAt: -1 });

// Middleware to update the updatedAt field before saving
feedbackSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Feedbacks', feedbackSchema);