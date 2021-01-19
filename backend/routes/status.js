const Router = require('express-promise-router')
const db = require('../db')

const router = new Router()

// export our router to be mounted by the parent application
module.exports = router


async function getDbTime() {
    return await db.query('SELECT NOW();')
}

async function getNumberOfCategories() {
    return await db.query('SELECT COUNT(*) FROM categories;')
}

async function getDbMigrationVersion() {
    return await db.query('SELECT * FROM migrations ORDER BY id DESC FETCH FIRST 1 ROWS ONLY;')
}

async function getDbTableInfo() {
    const _categoriesCount = await getNumberOfCategories()
    const _migrationsInfo = await getDbMigrationVersion()


    const _dbMigrationsInfo = {
        DbVersion: _migrationsInfo.rows[0]['id'],
        ScriptName: _migrationsInfo.rows[0]['name'],
        ScriptHash: _migrationsInfo.rows[0]['hash'],
        ExecutedAt: _migrationsInfo.rows[0]['executed_at']
    }

    return {
        NumberOfCategories: _categoriesCount.rows[0]['count'],
        DbMigrationsInfo: _dbMigrationsInfo
    }
}

router.get('/status', async (req, res) => {
    try {
        const _dbTime = await getDbTime()
        const _dbTableInfo = await getDbTableInfo()


        res.send(JSON.stringify({
            DbConnectionStatus: 'OK',
            DbTimestamp: _dbTime.rows[0]['now'],
            DbInfo: [_dbTableInfo]
        }))
    } catch (err) {
        console.error('Failed to connect to database')
        res.send(JSON.stringify({
            DbConnectionStatus: 'DOWN',
            Error: err
        }))
    }
})
