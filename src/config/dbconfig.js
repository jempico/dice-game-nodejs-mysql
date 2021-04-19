const knexfile = require('./knexfile');
const knex = require('knex');

// Don't access knexfile.development directly without
// updating env vars before.
const db = knex(knexfile.development);

module.exports = db;
