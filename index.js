// Add Express
const express = require("express");

// Initialize Express
const app = express();

// Create GET request
app.get("/", (req, res) => {
  res.send("we have deployed the app success");
});

// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});
