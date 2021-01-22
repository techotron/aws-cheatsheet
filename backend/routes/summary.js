const Router = require('express-promise-router')
const fs = require('fs')

const router = new Router()

// export our router to be mounted by the parent application
module.exports = router

function getSummary(path) {
    try {
        const data = fs.readFileSync(`./content/${path}.md`, 'utf8')
        return data
    } catch (err) {
        console.error(err)
        return err
    }

}

router.get('/:categoryTypeName/:categoryName/:subCategoryName', async (req, res) => {
    const categoryTypeName = req.params.categoryTypeName
    const categoryName = req.params.categoryName
    const subCategoryName = req.params.subCategoryName

    try {
        res.send(JSON.stringify({
            summary: getSummary(`${categoryTypeName}/${categoryName}/${subCategoryName}`)
        }))
    } catch (err) {
        console.error('Failed')
        res.send(JSON.stringify({
            Error: err
        }))
    }
})

