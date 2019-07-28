const config = require("./config");
const express = require("express");
const graphqlHTTP = require("express-graphql");
const app = express();
const schema = require("./schema");
const root = require("./root");

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
  })
);

app.listen(config.express.port, () => {
  console.log(`Server up and listening on port ${config.express.port}`);
});
