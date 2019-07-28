const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Cuisine {
        id: Int
        name: String
        restaurants: [Restaurant]
    }

    type Country {
        id: Int
        name: String
        cities: [City]
    }

    type City {
        id: Int
        name: String
        country_name: String
        restaurants: [Restaurant]
    }

    type Restaurant {
        id: Int
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

    input NewRestaurant {
        name: String
        cuisine_name: String
        city_name: String
        country_name: String
        stars: Int
        price: String
    }

    input EditRestaurant {
        name: String
        cuisine_name: String
        city_name: String
        stars: Int
        price: String
    }

    input NewCity {
        name: String!
        country_name: String!
    }

    type Mutation {
        AddRestaurant(info: NewRestaurant!, secretToken: String!): Restaurant
        EditRestaurant(id: Int!, edits: EditRestaurant, secretToken: String!): Restaurant
        DeleteRestaurant(id: Int!, secretToken: String!): String,
        AddCity(id: Int!, info: NewCity!, secretToken: String!): City
    }

`);

module.exports = schema;
