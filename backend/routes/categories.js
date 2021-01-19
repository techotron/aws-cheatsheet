const Router = require('express-promise-router')
const db = require('../db')

const router = new Router()

// export our router to be mounted by the parent application
module.exports = router

async function getAllCategories() {
    return await db.query('SELECT * FROM categories;')
}

async function getCategoryInfo(category_id) {
    const _getCategoryInfoQuery = `
SELECT 
	categories.category_name,
	category_types.category_type_name,
	sub_categories.sub_category_name,
	sub_categories.sub_category_title,
	summaries.summary,
	summaries.use_case,
	checklists.checklist,
	pricing_models.pricing_model,
	*
FROM categories
LEFT JOIN category_types ON categories.type_id = category_types.category_type_id
LEFT JOIN sub_categories ON categories.category_id = sub_categories.category_id
LEFT JOIN summaries ON sub_categories.sub_category_id = summaries.summary_id
LEFT JOIN checklists ON sub_categories.sub_category_id = checklists.checklist_id
LEFT JOIN pricing_models ON sub_categories.sub_category_id = pricing_models.pricing_model_id
WHERE categories.category_id = $1;    
    `
    return await db.query(_getCategoryInfoQuery, [category_id])
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

router.get('/category/:id', async (req, res) => {
    try {
        const _categoryInfo = await getCategoryInfo(req.params.id)
        res.send(JSON.stringify(_categoryInfo.rows))
    } catch (err) {
        res.send(JSON.stringify({
            Error: err
        }))
    }
})

