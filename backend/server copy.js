
const express = require('express')
const path = require('path')
require('dotenv').config({ path: './.env' })
const cors = require('cors')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const pdf = require('html-pdf')
const compression = require('compression')
const helmet = require('helmet')
const colors = require('colors')
const bodyParser = require('body-parser')
// const { BadRequest, notFound } = require('./middlewares/errorHandling')
const connectionDB = require('./config/mongodb.config'); //const { MONGODB } = require('./config.js'); Sensetive
const ApiErrors = require('./middlewares/errorHandlers')
const personnelRouter = require('./routers/Personnel.routes')
const itAssetsRouter = require('./routers/ItAssets.routes')
const companyRouter = require('./routers/Company.routes')
const activitiesRouter = require('./routers/Activities.routes')
const equipmentsRouter = require('./routers/Equipments.routes')
const documentsRouter = require('./routers/Documents.routes')
const usersRouter = require('./routers/Users.routes')
const pdfTemplate = require('./documents/commission-order');




const app = express();
const PORT = process.env.PORT || 5001
connectionDB();


// const DATA = JSON.parse(fs.readFileSync(`${__dirname}/api/data.json`))

// * view engine setup for EJS
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');


// * #---- GLOBAL MIDDLEWARES ----#
// Use gzip compression
app.use(compression());


// Set security HTTP headers
app.use(helmet())

// support encoded bodies
// deprecated express.json()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Implement CORS options
app.use(cors())
// Access-Control-Allow-Origin *
// app.use({ origin: 'http://localhost:3000' })

app.options('*', cors())
// app.options('/api/, cors()) - for individual request

// app.use(function (req, res, next) {
//     // *Website you wish to allow to connect
//     res.setHeader(
//         'Access-Control-Allow-Origin', '*'
//     ); //or 'http://localhost:3000' for development:mode

//     // *Request methods you wish to allow
//     res.setHeader(
//         'Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'
//     );

//     // *Request headers you wish to allow
//     res.setHeader(
//         'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//     );

//     // *Set to true if you need the website to include cookies in the requests sent
//     //  *to the API (e.g. in case you use sessions)
//     res.setHeader(
//         'Access-Control-Allow-Credentials', true
//     );

//     res.setHeader(
//         'Content-Security-Policy-Report-Only',
//         "default-src 'self'; font-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'; frame-src 'self'"
//     );

//     // Pass to next layer of middleware
//     next()
// });

app.use(cookieParser())





app.post('/workflow/categorization-commission', (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('commissionOrder.pdf', (err) => {
        if (err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
});

app.get('/workflow/categorization-commission', (req, res) => {
    res.sendFile(`${__dirname}/commissionOrder.pdf`)
})


// ! Routes call under CORS
//Функция промежуточной обработки, монтируемая в путь /user/:id. Эта функция выполняется для всех типов запросов HTTP в пути /user/:id.
//app.use('/user/:id', function (req, res, next) {}



// app
// .route('/user/:id')
// .get()
// .post()
// .delete()
// .patch()
app.use('/api/personnel', personnelRouter)
app.use('/api/itAssets', itAssetsRouter)
app.use('/api', companyRouter)
app.use('/api', activitiesRouter)
app.use('/api', equipmentsRouter)
app.use('/api', usersRouter)
// app.use('/', documentsRouter)
// app.get('/api/data', (req, res, next) => {
//     res.status(200).json({
//         status: 'good',
//         results: DATA.lenght,
//         data: {
//             DATA //any_words: DATA
//         }
//     })
// })


// ! custom middleware
// const middlewareTest = (req, res, next) => {
//   console.log('request:')
//   next()
// }


// app.use(express.static(path.join(__dirname, '../client/build/index.html')));



// ! catch 404 and forward to error handler
//Промежуточный обработчик для обработки ошибок должен быть определен последним, после указания всех app.use() и вызовов маршрутов
// app.use(notFound);
// app.use(errorHandler)
// app.use(function (req, res, next) {
//     next(createError(404));
// });

// ! Error Handlers
// OPTION: 1
// app.all('*', (req, res, next) => {
//     // res.status(404).json({
//     //     status:'fail',
//     //     message: `${req.originalUrl}`
//     // })

//     const err = new Error(`Cant't find ${req.originalUrl} on this server`);
//     err.status = 'fail';
//     err.statusCode = 404;

//     next(err);
// })

// app.use((err, req, res, next) => {
//     err.statusCode = err.statusCode || 500;
//     err.status = err.status || 500;

//     res.status(err.statusCode).json({
//         status: err.status,
//         message: err.message
//     });
// })

// OPTION: 2
// app.use(function (err, req, res, next) {
//     // * set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     // * render the error page
//     app.use(function (err, req, res, next) {
//         console.error(err.message);
//         if (!err.statusCode) err.statusCode = 500;
//         res.status(err.statusCode).send(err.message);
//     });

//     res.status(err.status || 500);
//     res.json({
//         message: err.message,
//         error: err
//     });
// });


// ! Static Files
// Serving static files
app.use(express.static(path.join(__dirname, '../client/build')));

// if (process.env.NODE_ENV === 'production') {
app.get('*', (req, res) => { // '/', function() //or path.join
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
})
// }
// else {
//     app.get('/', (req, res, next) => {
//         res.send('API running ✌').json({
//             message: 'hello'
//         });
//     });
// }


app.use(ApiErrors)


// ! RUNNING APP
// async mode (non-blocking)
const runServer = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`SERVER RUNNING IN MODE=${process.env.NODE_ENV} on PORT=${PORT}`.green.bold);
        })
    } catch (err) {
        throw new Error(err)
    }
}

runServer()

