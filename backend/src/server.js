const app = require('./app'); // Import the app
const connectDB = require('./config/db');

// Connect to database
connectDB();

const PORT = process.env.PORT || 4000;

// Start the server here instead of in app.js
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});