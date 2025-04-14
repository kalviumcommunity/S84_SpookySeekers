const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const connectToDb = require("./config/db");
const router = require("./Routes/posts");
const authRoutes = require("./Routes/auth");

// Middleware
app.use(cors()); // Allow all origins during development
app.use(express.json());

// Routes
app.get("/ping", (req, res) => {
  try {
    res.status(200).send("This is Home Route");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

app.use('/api', router);
app.use('/api/auth', authRoutes);

const db = process.env.DB_URI;

app.listen(PORT, async () => {
  try {
    await connectToDb(db);
    console.log(`Server is running at http://localhost:${PORT}`);
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
});