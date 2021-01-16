const express = require('express')
const cors = require('cors')
const db = require('./db')


const app = express()
app.use(cors())

app.get('/', (_req, res) => {
    res.json('Hello from the backend')
})

app.get('/status', (_req, _res) => {
    db.query('SELECT NOW()', (err, res) => {
        if (err) {
            console.error("Failed to connect to the database")
            return next(err)
        }
        console.log("Connected to the database")
        _res.send(JSON.stringify({ 
            DbConnectionStatus: 'OK',
            DbTimestamp: res.rows[0]['now']
        }))
    })
})

app.listen(5000, () => {
    console.log('Server running on port 5000')
})
