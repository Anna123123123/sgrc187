
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
const connectionDB = require('./config/mongodb.config');
const errorsHandler = require('./middlewares/errorHandlers.middleware')
const personnelRouter = require('./routers/personnel.routes')
const itAssetsRouter = require('./routers/it-assets.routes')
const companyRouter = require('./routers/company.routes')
const activitiesRouter = require('./routers/activities.routes')
const equipmentsRouter = require('./routers/equipments.routes')
const documentsRouter = require('./routers/documents.routes')
const usersRouter = require('./routers/users.routes')
const pdfTemplate = require('./documents/commission-order');


const app = express();
const PORT = process.env.PORT || 5001
connectionDB();
const corsOptions = {
    credentials: true,
    origin: process.env.CLIENT_URL
}

app.use(compression());
app.use(helmet())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(cors(corsOptions))
app.use('/api', personnelRouter)
app.use('/api', itAssetsRouter)
app.use('/api', companyRouter)
app.use('/api', activitiesRouter)
app.use('/api', equipmentsRouter)
app.use('/api', usersRouter)
app.use(express.static(path.join(__dirname, '../client/build')));
app.use(errorsHandler)


app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
})

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


const runServer = async () => {
    try {
        await app.listen(PORT, () => {
            console.log(`SERVER TRY RUNNING IN MODE=${process.env.NODE_ENV} on PORT=${PORT}`.green.bold);
        })
    } catch (err) {
        throw new Error(err)
    }
}

runServer()

