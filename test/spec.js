const chai = require("chai");
const expect = chai.expect;
const url = "http://localhost:3000";
const request = require("supertest")(url);
const config = require("../config");
const knex = require("knex")(config.db);

describe("GraphQL Queries", () => {
  it("should return Restaurants", done => {
    const queryBody = {
      query: `query {
                Restaurants(limit: 3) {
                    id
                    name
                }
            }`
    };
    request
      .post("/graphql")
      .send(queryBody)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.data.Restaurants.length).to.equal(3);
        expect(res.body.data.Restaurants[0]).to.deep.equal({
          id: 1,
          name: "Golden Formosa"
        });
        done();
      });
  });
});
