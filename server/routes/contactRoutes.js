const express = require('express');
const contactController = require('../controllers/contactController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Public routes
router.post('/enquiry', contactController.createEnquiry);
router.post('/booking', contactController.createBooking);

// Admin routes
router.get('/enquiries', authMiddleware, contactController.getEnquiries);
router.put('/enquiry/:id/status', authMiddleware, contactController.updateEnquiryStatus);
router.get('/bookings', authMiddleware, contactController.getBookings);
router.put('/booking/:id/status', authMiddleware, contactController.updateBookingStatus);

module.exports = router;
