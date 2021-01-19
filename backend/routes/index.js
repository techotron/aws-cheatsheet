const status = require('./status')
const categories = require('./categories')
const summaries = require('./summaries')
const checklists = require('./checklist')
const pricingModels = require('./pricingModels')

module.exports = app => {
    app.use('/status', status)
    app.use('/categories', categories)
    app.use('/summaries', summaries)
    app.use('/checklists', checklists)
    app.use('/pricingmodels', pricingModels)
}
