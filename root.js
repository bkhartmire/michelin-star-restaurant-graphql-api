const config = require("./config");
const knex = require("knex")(config.db);

const getRestaurants = async (attribute, value) => {
  const restaurants = await knex("restaurants")
    .where(attribute, value)
    .select();
  return restaurants;
};

const getCities = async country => {
  const cities = await knex("cities")
    .where({ country_name: country })
    .select();
  return cities;
};

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
    cuisine.restaurants = getRestaurants("cuisine_name", args.name);
    return cuisine;
  },

  Countries: async () => {
    const countries = await knex("countries").select();
    for (const country of countries) {
      country.cities = await getCities(country.name);
      country.restaurants = [];
      for (const city of country.cities) {
        city.restaurants = await getRestaurants("city_name", city.name);
        country.restaurants = country.restaurants.concat(city.restaurants);
      }
    }
    return countries;
  },

  Country: async args => {
    let country = await knex("countries")
      .where({ name: args.name })

      .select();
    country = country.pop();
    country.cities = getCities(country.name);
    country.restaurants = [];
    for (const city of country.cities) {
      city.restaurants = await getRestaurants("city_name", city.name);
      country.restaurants = country.restaurants.concat(city.restaurants);
    }
    return country;
  },

  Cities: async () => {
    const cities = await knex("cities").select();
    for (const city of cities) {
      city.restaurants = getRestaurants("city_name", city.name);
    }
    return cities;
  },

  City: async args => {
    let city = await knex("cities")
      .where({ name: args.name })
      .select();
    city = city.pop();
    city.restaurants = getRestaurants("city_name", args.name);
    return city;
  },

  Restaurants: async () => {
    const restaurants = await knex("restaurants").select();
  }
};
module.exports = root;
