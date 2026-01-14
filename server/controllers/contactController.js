const Enquiry = require('../models/Enquiry');
const Booking = require('../models/Booking');

// Create enquiry
exports.createEnquiry = async (req, res) => {
  try {
    const enquiry = new Enquiry(req.body);
    await enquiry.save();
    
    // TODO: Send email notification to admin
    
    res.status(201).json({ 
      success: true, 
      message: 'Enquiry received. We will contact you soon.',
      enquiry 
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get enquiries (admin)
exports.getEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.json({ success: true, enquiries });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update enquiry status (admin)
exports.updateEnquiryStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const enquiry = await Enquiry.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.json({ success: true, enquiry });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Create booking
exports.createBooking = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    
    // TODO: Send email confirmation to client
    
    res.status(201).json({ 
      success: true, 
      message: 'Booking confirmed. Check your email for details.',
      booking 
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get bookings (admin)
exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ date: 1 });
    res.json({ success: true, bookings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update booking status (admin)
exports.updateBookingStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.json({ success: true, booking });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
