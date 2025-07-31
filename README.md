TITLE: Movie Ticket Booking Web App (Backend)
DESCRIPTION:
A secure and scalable backend system for a movie ticket booking platform. Built with Node.js and Express, the application supports user authentication, role-based access (admin/user), and CRUD operations for movies, theatres, and bookings.
FEATURES:
- 🔐 JWT-based user login and authentication
- 👤 Role-based access control (admin & user)
- 🎬 Movie CRUD APIs (admin only)
- 🏢 Theatre CRUD APIs (admin only)
- 🎟️ Booking APIs for users (create, view, update, delete)
- ⚙️ Middleware for authentication & authorization
- 🧪 API tested with Postman & curl
Tech Stack:
- Node.js
- Express.js
- JSON Web Token (JWT)
- dotenv
- In-memory data store (demo mode)
Project Structure
├── controllers/
├── routes/
├── middlewares/
├── utils/
├── server.js
├── .env
├── package.json
