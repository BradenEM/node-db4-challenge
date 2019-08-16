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

router.get("/:id", async (req, res) => {
	const {id} = req.params
	const recipe = await db('recipes').where({id})

	try {
		res.status(200).json(recipe);
	} catch (error) {
		res.status(500).json(error);
	}
})

router.post("/", async (req, res) => {
	const body = req.body;
	const recipe = await db("recipes").insert(body)

	try {
		res.status(201).json(recipe);
	} catch (error) {
		res.status(500).json(error)
	}
})

router.put("/:id", async (req, res) => {
	const {id} = req.params;
	const body = req.body;
	const recipe = await db("recipes").update(body).where({id})

	try {
		res.status(200).json(recipe);
	} catch (error) {
		res.status(500).json(error)
	}
})

router.delete("/:id", async (req, res) => {
	const {id} = req.params;
	const recipe = await db('recipes').where({id}).del();

	try {
		res.status(200).json(recipe);
	} catch (error) {
		res.status(500).json(error);
	}
})

module.exports = router;
