const express = require('express');

const router = express.Router();

// Placeholder routes for booking management
router.get('/', (req, res) => {
  res.json({ success: true, message: 'Booking routes' });
});

module.exports = router;
