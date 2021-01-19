const Router = require('express-promise-router')
const db = require('../db')

const router = new Router()

// export our router to be mounted by the parent application
module.exports = router

async function getSummary(category_id) {
    return rows = await db.query('SELECT * FROM summaries WHERE parent_category_id = $1;', [category_id])
}

router.get('/:id', async (req, res) => {
    try {
        const _summary = await getSummary(req.params.id)
        res.send(JSON.stringify(_summary.rows))
    } catch (err) {
        console.error('Failed to get summary ID: ' + req.params.id)
        res.send(JSON.stringify({
            Error: err
        }))
    }
})
