const config = require("./config");
const knex = require("knex")(config.db);

const root = {
  Cuisines: async () => {
    const result = await knex("cuisines").select();
    return result;
  },

  Cuisine: async args => {
    let cuisine = await knex("cuisines")
      .where({ name: args.name })
      .select();
    cuisine = cuisine.pop();
    const restaurants = await knex("restaurants")
      .where({
        cuisine_name: args.name
      })
      .select();
    cuisine.restaurants = restaurants;
    return cuisine;
  },

  Country: async () => {
    const result = await knex("countries").select();
    return result;
  },

  Countries: async args => {
    let country = await knex("countries")
      .where({ name: args.name })
      .select();
    country = country.pop();
    const cities = await knex("cities")
      .where({ country_name: country.name })
      .select();
    country.cities = cities;
    return country;
  }
};
module.exports = root;
