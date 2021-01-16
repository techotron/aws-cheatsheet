const { Pool } = require('pg')
const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    // port: 1234
    port: process.env.DB_PORT
})

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
}
