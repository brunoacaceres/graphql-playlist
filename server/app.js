const graphqllHTTP = require('express-graphql');
const express = require('express');

const app = express();

app.use('/graphql', graphqllHTTP({
    
}))

app.listen(4000,() =>{
    console.log('listen port 4000');
});