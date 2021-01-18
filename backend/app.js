const express = require('express')
const cors = require('cors')
const mountRoutes = require('./routes')
// const db = require('./db')


const app = express()
app.use(cors())

app.get('/', (_req, res) => {
    res.json('Hello from the backend')
})

mountRoutes(app)

app.listen(5000, () => {
    console.log('Server running on port 5000')
})
