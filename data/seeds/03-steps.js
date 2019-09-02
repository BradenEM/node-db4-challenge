exports.seed = function(knex, Promise) {
  return knex("steps").insert([
    {
      step_number: 1,
      recipe_id: 1,
      directions: "pour preffered cereal in bowl"
    },
    { step_number: 2, recipe_id: 1, directions: "pour milk over cereal" },
    {
      step_number: 1,
      recipe_id: 2,
      directions: "mix vodka, lemon, club soda and salt in glass"
    },
    { step_number: 2, recipe_id: 2, directions: "enjoy responsibly" }
  ]);
};
