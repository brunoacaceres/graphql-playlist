const graphql = require('graphql');
const _ = require('lodash');

const {
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLSchema,
    GraphQLID
} = graphql;

// Dummy data
var books = [
    {name: 'Name of the world', genre: 'Fantasy', id: '1'},
    {name: 'The Final Empire', genre: 'Fantasy', id: '2'},
    {name: 'The long Earth', genre: 'Sci-Fi', id: '3'},
];
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields:() => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args:{id:{ type: GraphQLID}},
            resolve(parent, args){
                // Code to get data from db / other source.
                console.log(typeof(args.id));
                return _.find(books,{id: args.id});
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});