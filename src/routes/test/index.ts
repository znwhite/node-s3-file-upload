import express, { Request, Response } from 'express';
const router: express.Router = express.Router()

router.get('/', function (req: Request, res: Response) {
    const dummyData: object = {
        first: "Tom",
        last: "Brady",
        jersey: 12
    }
    res.json(dummyData)
})

module.exports = router;