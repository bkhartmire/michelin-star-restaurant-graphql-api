const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Cuisine {
        name: String
        restaurants: [Restaurant]
    }

    type Country {
        name: String
        cities: [City]
    }

    type City {
        name: String
        country_name: String
        restaurants: [Restaurant]
    }

    type Restaurant {
        name: String
        cuisine_name: String
        city_name: String
        country_name: String
        stars: Int
        price: String
    }

    type Query {
        Cuisines: [Cuisine]
        Cuisine(name: String!): Cuisine
        Countries: [Country]
        Country(name: String!): Country
        Cities: [City]
        City(name: String!): City
        Restaurants: [Restaurant]
        Restaurant(name: String!): Restaurant
    }

`);

module.exports = schema;

// Restaurants: [Restaurant]
// Restaurant(name: String!): Restaurant
