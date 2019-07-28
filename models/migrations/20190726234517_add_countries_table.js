exports.up = function (knex) {
  return knex.schema.createTable("countries", t => {
    t.increments().index();
    t.string("name")
      .unique()
      .notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("countries");
};
