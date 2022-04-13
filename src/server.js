const express = require('express')
const morgan = require('morgan')
const routes = require('./routes')
const app = express();
const Db = require('./config/connectionDB')


Db.connect()

app.use(morgan('combined'));
app.use(express.json());
app.use(routes);

app.listen(3000,() =>{
    console.log('The server runing in port 3000')
})
