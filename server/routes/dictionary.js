const express = require("express");
const router = express.Router();
const { getDictionaryEntries, addDictionaryEntry } = require("../database");

// Get all dictionary entries
router.get("/", async (req, res) => {
  try {
    const entries = await getDictionaryEntries();
    res.json(entries);
  } catch (error) {
    console.error("Error fetching dictionary entries:", error);
    res.status(500).send("Internal server error");
  }
});

// Add a new dictionary entry
router.post("/", async (req, res) => {
  const { italian, english } = req.body;

  if (!italian || !english) {
    return res.status(400).send("Both Italian and English words are required");
  }

  try {
    const newEntry = await addDictionaryEntry({ italian, english });
    res.status(201).json(newEntry);
  } catch (error) {
    console.error("Error adding new dictionary entry:", error);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;