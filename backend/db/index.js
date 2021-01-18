const { Pool, Client } = require('pg')
const { migrate } = require('postgres-migrations')
const { promisify } = require('util')

const dbDetails = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    // port: 1234 // Intentionally wrong port for testing DB conn failure
    port: process.env.DB_PORT    
}

const pool = new Pool(dbDetails)
const client = new Client(dbDetails)

const sleep = promisify(setTimeout)

async function migrateUp() {
    client.connect()
    var retryCounter = 5
    for (i = 0; i < retryCounter; i ++) {
        try {
            await migrate({client}, "migration")
            console.log('Finished DB migration successfully')
            client.end()
            break
        } catch (err) {
            console.log(`Failed to run migrateUp. Tried ${i + 1} times`)
            console.error(err)
            await sleep(1000)
        }
    }
}

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback)
    },
    client: () => {
        return client()
    },
    migrateUp: migrateUp
}
