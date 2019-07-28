const config = require("./config");
const express = require("express");
const graphqlHTTP = require("express-graphql");
const app = express();
const schema = require("./server/schema");
const root = require("./server/root");

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
  })
);

app.use(express.static(`${__dirname}/public`));

app.listen(config.express.port, () => {
  console.log(`Server up and listening on port ${config.express.port}`);
});
