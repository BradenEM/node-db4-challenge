exports.seed = function(knex, Promise) {
  return knex("recipes").insert([{ name: "cereal" }, { name: "chilton" }]);
};
