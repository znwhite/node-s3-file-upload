import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();

const add = (a: number, b: number): number => a + b; 

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    const numby = add(4,5).toString();
    res.send(numby);
})

app.listen(5000, () => console.log('server listening on port 5000'));