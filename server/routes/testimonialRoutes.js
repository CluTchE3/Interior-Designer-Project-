const express = require('express');
const testimonialController = require('../controllers/testimonialController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Public routes
router.get('/', testimonialController.getTestimonials);
router.post('/', testimonialController.createTestimonial);

// Admin routes
router.put('/:id', authMiddleware, testimonialController.updateTestimonial);
router.delete('/:id', authMiddleware, testimonialController.deleteTestimonial);

module.exports = router;
