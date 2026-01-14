const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: String,
  projectType: String,
  budget: String,
  timeline: String,
  location: String,
  description: String,
  status: {
    type: String,
    enum: ['new', 'contacted', 'quoted', 'converted', 'rejected'],
    default: 'new'
  },
  notes: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

module.exports = mongoose.model('Enquiry', enquirySchema);
