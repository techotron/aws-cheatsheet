const Router = require('express-promise-router')
const db = require('../db')

const router = new Router()

// export our router to be mounted by the parent application
module.exports = router

async function getPricingModel(category_id) {
    return rows = await db.query('SELECT * FROM pricing_models WHERE parent_category_id = $1;', [category_id])
}

router.get('/:id', async (req, res) => {
    try {
        const _pricingModel = await getPricingModel(req.params.id)
        res.send(JSON.stringify(_pricingModel.rows))
    } catch (err) {
        console.error('Failed to get pricing model ID: ' + req.params.id)
        res.send(JSON.stringify({
            Error: err
        }))
    }
})
