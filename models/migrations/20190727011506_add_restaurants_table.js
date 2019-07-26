exports.up = function(knex) {
  return knex.schema.createTable("restaurants", t => {
    t.increments().index();
    t.string("name").unique();
    t.string("city_name");
    t.foreign("city_name")
      .references("name")
      .inTable("cities");
    //add cuisines
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("restaurants");
};
