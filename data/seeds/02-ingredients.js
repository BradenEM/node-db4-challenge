exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    { name: 'cereal' },
    { name: 'milk' },
    { name: 'vodka' },
    { name: 'lemon' },
    { name: 'club soda' },
    { name: 'salt' }
  ]);
};
