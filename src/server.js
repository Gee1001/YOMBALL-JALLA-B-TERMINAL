const express = require('express');
const app = express();

const routes = require('./routes/router');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res)=>{
    res.status(200).json({message:'peace'})

});

const connect = require('./modules/connect');

void(async()=>{
    try{
        await connect();
        console.log('connect to database');
    }catch(error){
        console.log('error connecting to database', error.message);
    }
})();

app.use('/api', routes);

module.exports = app;

