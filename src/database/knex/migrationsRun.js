const sqliteConnection = require('../')
const createUsers = require('./migrations/20240430233852_createUsers.js')
const createMovies = require('./migrations/20240430233000_createMovieNotes.js')
const createTags = require('./migrations/20240430233914_createTags.js')

async function migrationsRun(){
    const schemas = [
        createUsers
    ].join(' ')

    sqliteConnection()
    .then(db => db.exec(schemas))
    .catch(error => console.log(error))
}

module.exports = migrationsRun