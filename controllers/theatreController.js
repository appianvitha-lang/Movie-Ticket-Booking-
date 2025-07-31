const { theatres } = require('../models/dataStore');

exports.createTheatre = (req, res) => {
  const theatre = { id: Date.now(), ...req.body };
  theatres.push(theatre);
  res.status(201).json(theatre);
};

exports.getAllTheatres = (req, res) => res.json(theatres);
