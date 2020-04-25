const knex = require('knex')
const configurations = require('../../knexfile');
const connections = knex(configurations.development);

module.exports = connections