const express = require('express');

const router = express.Router();

// Placeholder routes for enquiry and booking management
router.get('/', (req, res) => {
  res.json({ success: true, message: 'Enquiry routes' });
});

module.exports = router;
