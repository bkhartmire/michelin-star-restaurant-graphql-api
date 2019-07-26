exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cuisines")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("cuisines").insert([
        { name: "Belgian" },
        { name: "Western" },
        { name: "Scandinavian" },
        { name: "French" },
        { name: "European" },
        { name: "Cantonese" },
        { name: "Italian" },
        { name: "Chinese" },
        { name: "Japanese" },
        { name: "Spanish" },
        { name: "Dutch" },
        { name: "Korean" },
        { name: "Basque" },
        { name: "Swiss" },
        { name: "British" },
        { name: "New American" }
      ]);
    });
};
