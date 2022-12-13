const bodyParser = require('body-parser');
const createError = require('http-errors');
express = require('express');
path = require('path');
mongoose = require('mongoose');
cors = require('cors');
dbConfig = require('./db/database');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.db).then(()=>{
        console.log('Database Connected.')
    },
    error => {
        console.log('Database could not be connected: '+ error)
    }
)

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cors());

const studentRoute = require('./routes/students_routes');
app.use('/', studentRoute);

const port = process.env.PORT || 8080;

const server = app.listen(port, ()=>{
    console.log('Port connected to: '+port);
})

app.use((req, res,next)=>{
    next(createError(404));
});

app.get('/',(req, res) => {
    res.send('Invalid Endpoint');
});

app.use(function (err, req, res, next){
    if(!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
})

