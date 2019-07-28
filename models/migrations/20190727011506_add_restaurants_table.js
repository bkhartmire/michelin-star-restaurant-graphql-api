exports.up = function (knex) {
  return knex.schema.createTable("restaurants", t => {
    t.increments().index();
    t.string("name").notNullable();
    t.string("city_name");
    t.foreign("city_name")
      .references("name")
      .inTable("cities");
    t.string("cuisine_name");
    t.foreign("cuisine_name")
      .references("name")
      .inTable("cuisines");
    t.enu("stars", [1, 2, 3]).notNullable();
    t.enu("price", ["$", "$$", "$$$", "$$$$", "$$$$$"]);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("restaurants");
};
