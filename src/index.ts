import express, { Application, Request, Response, NextFunction } from 'express';
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const app: Application = express();

// route imports
const upload = require('./routes/upload/file');

// use routes
app.use('/upload', upload);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// enable cors
app.use(cors());

const add = (a: number, b: number): number => a + b; 

app.get('/number', (req: Request, res: Response, next: NextFunction) => {
    const numby: string = add(4,5).toString();
    res.send(numby);
})

app.listen(5000, () => console.log('server listening on port 5000'));