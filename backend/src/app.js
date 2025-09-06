import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load env vars
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
import authRoutes from './routes/auth.js';
import courseRoutes from './routes/courses.js';

app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Export only the app (server starts in server.js)
export default app;
