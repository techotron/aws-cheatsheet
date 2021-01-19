const Router = require('express-promise-router')
const db = require('../db')

const router = new Router()

// export our router to be mounted by the parent application
module.exports = router

async function getAllCategories() {
    return rows = await db.query('SELECT * FROM categories;')
}

router.get('/', async (req, res) => {
    try {
        const _allCategories = await getAllCategories()
        res.send(JSON.stringify(_allCategories.rows))
    } catch (err) {
        console.error('Failed to get all categories')
        res.send(JSON.stringify({
            Error: err
        }))
    }
})
