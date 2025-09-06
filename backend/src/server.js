import app from './app.js';          // Import the app
import connectDB from './config/db.js'; // Import the DB connection

// Connect to database
connectDB();

const PORT = process.env.PORT || 4000;

// Start the server here instead of in app.js
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
