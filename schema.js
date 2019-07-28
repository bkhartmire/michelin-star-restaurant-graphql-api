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
    }

    type Restaurant {
        name: String
        cuisine: Cuisine
        city: City
        stars: Int
        price: String
    }

    type Query {
        Cuisines: [Cuisine]
        Cuisine(name: String!): Cuisine
        Countries: [Country]
        Country(name: String!): Country
    }

`);

module.exports = schema;

// Country(name: String!): Country
// Cities: [City]
// City(name: String!): City
// Restaurants: [Restaurant]
// Restaurant(name: String!): Restaurant
