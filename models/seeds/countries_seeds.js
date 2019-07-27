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
        { name: "Iceland" },
        { name: "Poland" }
      ]);
    });
};
