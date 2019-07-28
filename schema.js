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
        Cuisines(limit: Int, offset: Int): [Cuisine]
        Cuisine(name: String!): Cuisine
        Countries(limit: Int, offset: Int): [Country]
        Country(name: String!): Country
        Cities(limit: Int, offset: Int): [City]
        City(name: String!): City
        Restaurants(stars: Int = 0, cuisine: String, city: String, price: String, limit: Int, offset: Int): [Restaurant]
        Restaurant(name: String!): Restaurant
    }

`);

module.exports = schema;
