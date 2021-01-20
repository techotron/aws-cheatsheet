const Router = require('express-promise-router')
const db = require('../db')

const router = new Router()

// export our router to be mounted by the parent application
module.exports = router

async function getAllCategories() {

    // Useful source of help for below query: https://stackoverflow.com/questions/42222968/create-nested-json-from-sql-query-postgres-9-4
    const _getAllCategoriesQuery = `
    SELECT
        json_build_object(
            'categories', json_agg(
                json_build_object(
                    'category_id', c.category_id,
                    'title', c.category_name,
                    'items', sub_category_items
                )
            )
        ) categories
    FROM categories c
    LEFT JOIN (
        SELECT 
            sc.category_id,
            json_agg(
                json_build_object(
                    'sub_category_id', sc.sub_category_id,
                    'sub_category_name', sc.sub_category_name,
                    'sub_category_title', sc.sub_category_title,
                    'sub_items', (
                        SELECT 
                            json_agg(
                                json_build_object(
                                    'sub_item_id', si.sub_item_id,
                                    'sub_item_name', si.sub_item_name,
                                    'sub_item_title', si.sub_item_title
                                )
                            ) subitems
                        FROM sub_items si
                        WHERE sub_item_id IN (
                            SELECT UNNEST(sub_items) AS sub_item FROM sub_categories WHERE sub_category_id = sc.sub_category_id
                        )
                    )
                )
            ) sub_category_items
        FROM sub_categories sc
        GROUP BY category_id
    ) sc ON c.category_id = sc.category_id;
`

    const _allCategories = await db.query(_getAllCategoriesQuery)
    return _allCategories
}

async function getCategoryInfo(category_id, sub_category_id) {
    const _getCategoryInfoQuery = `
    SELECT
        c.category_id,
        c.category_name,
        category_types.category_type_name,
        sc.sub_category_id,
        sc.sub_category_name,
        sc.sub_category_title,
        summaries.summary,
        summaries.use_case,
        checklists.checklist,
        pricing_models.pricing_model
    FROM categories c
    LEFT JOIN category_types ON c.type_id = category_types.category_type_id
    LEFT JOIN sub_categories sc ON c.category_id = sc.category_id
    LEFT JOIN summaries ON sc.sub_category_id = summaries.summary_id
    LEFT JOIN checklists ON sc.sub_category_id = checklists.checklist_id
    LEFT JOIN pricing_models ON sc.sub_category_id = pricing_models.pricing_model_id
    WHERE 
        c.category_id = $1
        AND sc.sub_category_id = $2;`

    return await db.query(_getCategoryInfoQuery, [category_id, sub_category_id])
}

router.get('/', async (req, res) => {
    try {
        const _allCategories = await getAllCategories()
        res.send(JSON.stringify(_allCategories.rows))
        // const _allCategories = await getCategories()
        // res.send(_allCategories)
    } catch (err) {
        console.error('Failed to get all categories')
        res.send(JSON.stringify({
            Error: err
        }))
    }
})

router.get('/:categoryId/:subCategoryId', async (req, res) => {
    try {
        const _categoryInfo = await getCategoryInfo(req.params.categoryId, req.params.subCategoryId)
        res.send(JSON.stringify(_categoryInfo.rows))
    } catch (err) {
        res.send(JSON.stringify({
            Error: err
        }))
    }
})

