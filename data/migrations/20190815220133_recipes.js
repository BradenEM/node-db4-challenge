exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('name', 128).notNullable();
    })
    .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.string('name', 128).notNullable();
    })
    .createTable('steps', tbl => {
      tbl.integer('step_number').notNullable();
      tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipes.id');
      tbl.string('directions', 128).notNullable();
    })
    .createTable('recipe_ingredients', tbl => {
      tbl
        .integer('recipe_id')
        .notNullable()
        .unsigned()
        .references('recipes.id');
      tbl
        .integer('ingredient_id')
        .notNullable()
        .unsigned()
        .references('ingredients.id');
      tbl.integer('quantity').notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
