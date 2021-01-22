const status = require('./status')
const categories = require('./categories')
const summary = require('./summary')

module.exports = app => {
    app.use('/status', status)
    app.use('/categories', categories)
    app.use('/summary', summary)
}
