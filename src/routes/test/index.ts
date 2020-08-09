import express, { Request, Response } from 'express';
const db = require('../../db/index');
require('dotenv').config();

const router: express.Router = express.Router()

router.get('/', async function (req: Request, res: Response) {
    const start = Math.floor(Date.now());
    const fruitId: number = 1;
    const query = {
        text: 'SELECT name from fruit WHERE id = $1',
        values: [fruitId],
    };

    try {
        const data = await db.query(query);
        const finish: number = Math.floor(Date.now());
        const finalTime: string = (finish-start).toString() + ' milliseconds'
        res.json({
            data: data.rows,
            queryTime: finalTime
        })
    } catch (err) {
        console.log(err);
        res.json({
            error: err
        })
    }
})

module.exports = router;