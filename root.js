const config = require("./config");
const knex = require("knex")(config.db);

//to do: add limit params
//restaurant stars
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

const getCountry = async city => {
  const country = await knex("cities")
    .where({ name: city })
    .select("country_name");
  return country.pop().country_name;
};

const root = {
  Cuisines: async () => {
    const cuisines = await knex("cuisines").select();
    for (const cuisine of cuisines) {
      cuisine.restaurants = getRestaurants("cuisine_name", cuisine.name);
    }
    return cuisines;
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

  Restaurants: async args => {
    let restaurants;
    if (args.stars > 0 && args.stars < 4) {
      restaurants = await knex("restaurants")
        .where({ stars: args.stars })
        .select();
    } else {
      restaurants = await knex("restaurants").select();
    }
    for (const restaurant of restaurants) {
      restaurant.country_name = await getCountry(restaurant.city_name);
    }
    return restaurants;
  },

  Restaurant: async args => {
    let restaurant = await knex("restaurants")
      .where({ name: args.name })
      .select();
    restaurant = restaurant.pop();
    restaurant.country_name = getCountry(restaurant.city_name);
    return restaurant;
  }
};
module.exports = root;
