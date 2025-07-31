const express = require('express');
const app = express();
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const movieRoutes = require('./routes/movieRoutes');
const theatreRoutes = require('./routes/theatreRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const { authenticate } = require('./middleware/authMiddleware');

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/movies', authenticate, movieRoutes);
app.use('/api/theatres', authenticate, theatreRoutes);
app.use('/api/bookings', authenticate, bookingRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
