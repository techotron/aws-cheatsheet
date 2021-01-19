const Router = require('express-promise-router')
const db = require('../db')

const router = new Router()

// export our router to be mounted by the parent application
module.exports = router

async function getChecklist(category_id) {
    return rows = await db.query('SELECT * FROM checklists WHERE parent_category_id = $1;', [category_id])
}

router.get('/:id', async (req, res) => {
    try {
        const _checklist = await getChecklist(req.params.id)
        res.send(JSON.stringify(_checklist.rows))
    } catch (err) {
        console.error('Failed to get checklist ID: ' + req.params.id)
        res.send(JSON.stringify({
            Error: err
        }))
    }
})
