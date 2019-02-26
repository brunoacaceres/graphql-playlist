const graphqlHTTP = require('express-graphql');
const express = require('express');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://mongo:senha123@ds151805.mlab.com:51805/gql-ninja');
mongoose.connection.once('open', () =>{
    console.log('connected to database');
});


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000,() =>{
    console.log('listen port 4000');
});