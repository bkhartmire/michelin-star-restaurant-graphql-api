const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Cuisine {
        name: String
    }

    type Country {
        name: String
    }

    type City {
        name: String
        country: String
    }

    type Query {
        Cuisines: [Cuisine]
        Cuisine: Cuisine
        Countries: [Country]
        Country: Country
        Cities: [City]
        City: City
    }
`);

module.exports = schema;
