const knex = require('knex')(require('./knexfile'))
module.exports = {
  createUser ( userData ) {
    console.log(`Add user ${userData.username} with password ${userData.password}`)
    return knex('user').insert({
      userData.username,
      userData.password
    })
  }
}
