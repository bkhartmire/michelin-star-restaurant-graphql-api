exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("countries")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("countries").insert([
        { name: "Japan" },
        { name: "France" },
        { name: "United States" },
        { name: "Spain" },
        { name: "Germany" },
        { name: "Hong Kong" },
        { name: "Macau" },
        { name: "Italy" },
        { name: "United Kingdom" },
        { name: "Netherlands" },
        { name: "Switzerland" },
        { name: "Belgium" },
        { name: "China" },
        { name: "Denmark" },
        { name: "Monaco" },
        { name: "Norway" },
        { name: "South Korea" },
        { name: "Sweden" },
        { name: "Taiwan" }
      ]);
    });
};
