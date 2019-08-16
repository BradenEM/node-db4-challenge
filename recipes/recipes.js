const express = require("express");
const db = require("../data/db-config");
const router = express.Router();

router.get("/", async (req, res) => {
  const recipes = await db("recipes");

  try {
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
