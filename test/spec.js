const chai = require("chai");
const expect = chai.expect;
const url = "http://localhost:3000";
const request = require("supertest")(url);

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
  it("should return cuisines", done => {
    const queryBody = {
      query: `query {
                Cuisines(limit: 3) {
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
        expect(res.body.data.Cuisines.length).to.equal(3);
        expect(res.body.data.Cuisines[0]).to.deep.equal({
          id: 1,
          name: "Taiwanese"
        });
        done();
      });
  });
  it("should return countries", done => {
    const queryBody = {
      query: `query {
                Countries(limit: 3, offset: 2) {
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
        expect(res.body.data.Countries.length).to.equal(3);
        expect(res.body.data.Countries[0]).to.deep.equal({
          id: 3,
          name: "Macau"
        });
        done();
      });
  });
  it("should return cities", done => {
    const queryBody = {
      query: `query {
                Cities(limit: 2, offset: 5) {
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
        expect(res.body.data.Cities.length).to.equal(2);
        expect(res.body.data.Cities[1]).to.deep.equal({
          id: 7,
          name: "Helsinki"
        });
        done();
      });
  });
  it("should get country name of a restaurant", done => {
    const queryBody = {
      query: `query {
                Restaurant(name: "Danny's Steakhouse") {
                    name
                    stars
                    price
                    city_name
                    country_name
                }
            }`
    };
    request
      .post("/graphql")
      .send(queryBody)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.data.Restaurant).to.deep.equal({
          name: "Danny's Steakhouse",
          stars: 1,
          price: "$$",
          city_name: "Taipei",
          country_name: "Taiwan"
        });
        done();
      });
  });
});
