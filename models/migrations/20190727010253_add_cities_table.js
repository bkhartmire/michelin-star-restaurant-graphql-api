exports.up = function(knex) {
  return knex.schema.createTable("cities", t => {
    t.increments().index();
    t.string("name")
      .unique()
      .notNullable();
    t.string("country_name").notNullable();
    t.foreign("country_name")
      .references("name")
      .inTable("countries");
  });
};

exports.down = function(knex) {
  knex.schema.dropTable("cities");
};
