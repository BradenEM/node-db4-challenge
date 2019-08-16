const express = require('express');
const db = require('../data/db-config');
const router = express.Router();

router.get('/', async (req, res) => {
  const recipes = await db('recipes');

  try {
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const recipe = await db('recipes').where({ id });

  try {
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id/steps', async (req, res) => {
  const { id } = req.params;
  const steps = await db('steps').where({ recipe_id: id });

  try {
    res.status(200).json(steps);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id/ingredients', async (req, res) => {
  const { id } = req.params;
  const ingredients = await db('ingredients as i')
    .join('recipe_ingredients as ri', 'i.id', 'ri.ingredient_id')
    .select('i.name', 'ri.quantity')
    .where({ 'ri.recipe_id': id });

  try {
    res.status(200).json(ingredients);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  const body = req.body;
  const recipe = await db('recipes').insert(body);

  try {
    res.status(201).json(recipe);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const recipe = await db('recipes').update(body).where({ id });

  try {
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const recipe = await db('recipes').where({ id }).del();

  try {
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
