const { bookings } = require('../models/dataStore');

exports.createBooking = (req, res) => {
  const booking = { id: Date.now(), userId: req.user.id, ...req.body };
  bookings.push(booking);
  res.status(201).json(booking);
};

exports.getUserBookings = (req, res) => {
  const userBookings = bookings.filter(b => b.userId === req.user.id);
  res.json(userBookings);
};

exports.updateBooking = (req, res) => {
  const booking = bookings.find(b => b.id == req.params.id && b.userId === req.user.id);
  if (!booking) return res.status(404).json({ message: 'Booking not found' });
  Object.assign(booking, req.body);
  res.json(booking);
};

exports.deleteBooking = (req, res) => {
  const index = bookings.findIndex(b => b.id == req.params.id && b.userId === req.user.id);
  if (index === -1) return res.status(404).json({ message: 'Booking not found' });
  bookings.splice(index, 1);
  res.json({ message: 'Booking cancelled' });
};
