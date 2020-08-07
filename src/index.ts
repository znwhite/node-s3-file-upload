import express, { Application, Request, Response, NextFunction } from 'express';
require('dotenv').config();

const app: Application = express();

// route imports
const test = require('./routes/test/index');

// use routes
app.use('/test', test);

const add = (a: number, b: number): number => a + b; 

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    const numby: string = add(4,5).toString();
    res.send(numby);
})

app.listen(5000, () => console.log('server listening on port 5000'));