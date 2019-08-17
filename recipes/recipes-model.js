const db = require("../data/db-config");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(id) {
  return db("ingredients as i")
    .join("recipe_ingredients as ri", "i.id", "ri.ingredient_id")
    .select("i.name", "ri.quantity")
    .where({ "ri.recipe_id": id });
}

function getInstructions(id) {
  return db("steps").where({ recipe_id: id });
}
