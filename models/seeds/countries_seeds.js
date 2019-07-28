exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("countries")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("countries").insert([
        { name: "United States" },
        { name: "Hong Kong" },
        { name: "Macau" },
        { name: "United Kingdom" },
        { name: "Denmark" },
        { name: "Norway" },
        { name: "Sweden" },
        { name: "Taiwan" },
        { name: "Republic of Ireland" },
        { name: "Singapore" },
        { name: "Thailand" },
        { name: "Austria" },
        { name: "Croatia" },
        { name: "Czech Republic" },
        { name: "Finland" },
        { name: "Hungary" },
        { name: "Greece" },
        { name: "Poland" }
      ]);
    });
};
