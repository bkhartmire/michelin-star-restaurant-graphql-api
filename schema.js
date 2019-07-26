const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Cuisine {
        name: String
    }

    type Country {
        name: String
    }

    type Query {
        Cuisines: [Cuisine]
    }
`);

module.exports = schema;
