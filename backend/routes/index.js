const status = require('./status')
const categories = require('./categories')

module.exports = app => {
    app.use('/status', status)
    app.use('/categories', categories)
}
