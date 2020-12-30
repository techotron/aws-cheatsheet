const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/', (_req, res) => {
    res.json('Hello from the backend')
})

app.listen(5000, () => {
    console.log('Server running on port 5000')
})
