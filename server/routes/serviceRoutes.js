const express = require('express');
const serviceController = require('../controllers/serviceController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Public routes
router.get('/', serviceController.getServices);

// Admin routes
router.post('/', authMiddleware, serviceController.createService);
router.put('/:id', authMiddleware, serviceController.updateService);
router.delete('/:id', authMiddleware, serviceController.deleteService);

module.exports = router;
