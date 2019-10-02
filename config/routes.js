module.exports = (app) => {
    app.use('/', require('../routes/user'))
    app.use('/user', require('../routes/user'))
}