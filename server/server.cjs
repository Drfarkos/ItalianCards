const express = require("express");
const cors = require("cors");
const dictionaryRoutes = require("./routes/dictionary");

// Load environment variables
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/dictionary", dictionaryRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});