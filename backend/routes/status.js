const Router = require('express-promise-router')
const db = require('../db')

const router = new Router()

// export our router to be mounted by the parent application
module.exports = router

router.get('/status', async (req, res) => {
    try {
        const { rows } = await db.query('SELECT NOW()')
        res.send(JSON.stringify({
            DbConnectionStatus: 'OK',
            DbTimestamp: rows[0]['now']
        }))  
    } catch (err) {
        console.error('Failed to connect to database')
        res.send(JSON.stringify({
            Error: err
        }))
    }
})