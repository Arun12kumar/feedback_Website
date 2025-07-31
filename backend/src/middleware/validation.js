const { body, validationResult } = require('express-validator');

exports.validateFeedback = [
  // User Details Validation
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').optional().isEmail().withMessage('Invalid email format'),
  body('phone').trim().notEmpty().withMessage('Phone number is required'),
  body('preferredContactMethods').optional().isArray(),
  body('preferredContactMethods.*').isIn(['phone', 'whatsapp']),
  
  // Company Details Validation
  body('businessName').trim().notEmpty().withMessage('Business name is required'),
  body('businessEmail').optional().isEmail().withMessage('Invalid business email format'),
  body('contact').trim().notEmpty().withMessage('Company contact is required'),
  body('businessType').isArray({ min: 1 }).withMessage('At least one business type is required'),
  body('companySize').notEmpty().withMessage('Company size is required'),
  
  // Service Details Validation
  body('servicesNeeded').isArray({ min: 1 }).withMessage('At least one service is required'),
  body('projectBudget').notEmpty().withMessage('Project budget is required'),
  body('expectedTimeline').trim().notEmpty().withMessage('Expected timeline is required'),
  body('projectDescription').trim().notEmpty().withMessage('Project description is required'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];