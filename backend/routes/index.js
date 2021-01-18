const status = require('./status')

module.exports = app => {
    app.use('/', status)
}
