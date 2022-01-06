const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const sassMiddleware = require('node-sass-middleware')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const session = require('express-session')
const crypto = require('crypto')

// Routers
const indexRouter = require('./routes/index')
const locationsRouter = require('./routes/locations')
const elementsRouter = require('./routes/elements')
const adminRouter = require('./routes/admin')
const designsRouter = require('./routes/designs')
const usersRouter = require('./routes/users')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'twig')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(sassMiddleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: false, // true = .sass and false = .scss
    sourceMap: true
}))

// session
app.use(session({
    cookieName: 'session',
    secret: crypto.randomBytes(20).toString("hex"),
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 1000
}))

// body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

app.use(fileUpload({
    safeFileNames: true,
    preserveExtension: true
}))

// Routers
app.use('/', indexRouter)
app.use('/api/locations', locationsRouter)
app.use('/api/elements', elementsRouter)
app.use('/api/designs', designsRouter)
app.use('/api/users', usersRouter)

app.use('/admin', adminRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.render('base/error')
})

module.exports = app
