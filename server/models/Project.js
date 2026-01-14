const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  category: {
    type: String,
    enum: ['Residential', 'Commercial', 'Office'],
    required: true
  },
  location: String,
  area: String,
  budget: String,
  duration: String,
  images: [{
    url: String,
    alt: String
  }],
  beforeAfter: [{
    before: String,
    after: String
  }],
  featured: {
    type: Boolean,
    default: false
  },
  testimonial: {
    clientName: String,
    clientImage: String,
    review: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
