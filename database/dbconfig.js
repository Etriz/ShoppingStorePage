const knex = require("knex");
const config = require("./knexfile");

const dbDev = knex(config.development);

module.exports = dbDev;
