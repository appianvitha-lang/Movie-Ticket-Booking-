const { movies } = require('../models/dataStore');

exports.createMovie = (req, res) => {
  const movie = { id: Date.now(), ...req.body };
  movies.push(movie);
  res.status(201).json(movie);
};

exports.getAllMovies = (req, res) => res.json(movies);

exports.updateMovie = (req, res) => {
  const index = movies.findIndex(m => m.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Movie not found' });
  movies[index] = { ...movies[index], ...req.body };
  res.json(movies[index]);
};

exports.deleteMovie = (req, res) => {
  const index = movies.findIndex(m => m.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Movie not found' });
  movies.splice(index, 1);
  res.json({ message: 'Movie deleted' });
};
