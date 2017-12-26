module.exports = {
  createUser ( userData ) {
    console.log(`Add user ${userData.username} with password ${userData.password}`)
    return Promise.resolve()
  }
}
