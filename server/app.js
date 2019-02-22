const graphqllHTTP = require('express-graphql');
const express = require('express');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', graphqllHTTP({
    schema
}))

app.listen(4000,() =>{
    console.log('listen port 4000');
});