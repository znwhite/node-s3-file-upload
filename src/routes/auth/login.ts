import express, { Request, Response } from 'express';
const router: express.Router = express.Router()
const db = require('../../db/index');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.post('/', async (req: Request, res: Response) => {
    const userData = req.body;
    const email = userData.email;
    const password = userData.password;

    const query = {
        text:
            'SELECT id, email, firstname, lastname, password, is_confirmed FROM users WHERE email = $1',
        values: [email],
    };

    try {
        const data = await db.query(query);
    } catch (err) {
        console.log(err);
        res.status(404).send({
            error: err
        })
    }
});