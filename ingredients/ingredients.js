const express = require('express');
const db = require('../data/db-config');
const router = express.Router();

router.get('/', async (req, res) => {
  const ingredients = await db('ingredients');

  try {
    res.status(200).json(ingredients);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
