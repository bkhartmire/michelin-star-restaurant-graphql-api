const config = require("./config");
const knex = require("knex")(config.db);

const root = {
  Cuisines: async () => {
    const result = await knex("cuisines").select();
    console.log("result", result);
    return result;
  }
};
module.exports = root;
