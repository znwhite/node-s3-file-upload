import express, { Application, Request, Response, NextFunction } from 'express';
const bodyParser = require('body-parser');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const graphql = require("graphql");
const { GraphQLSchema } = graphql;
const { query } = require("./graphql/schemas/queries");
const { mutation } = require("./graphql/schemas/mutation");

require('dotenv').config();

const app: Application = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// enable cors
app.use(cors());

const schema = new GraphQLSchema({
    query,
    mutation
  });

app.use('/api', graphqlHTTP({
    schema,
    graphiql: true
  }));

const add = (a: number, b: number): number => a + b; 

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    const numby: string = add(4,5).toString();
    res.send(numby);
})

app.listen(5000, () => console.log('server listening on port 5000'));