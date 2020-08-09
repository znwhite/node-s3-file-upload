"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var bodyParser = require('body-parser');
var cors = require('cors');
require('dotenv').config();
var app = express_1.default();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// enable cors
app.use(cors());
var add = function (a, b) { return a + b; };
app.get('/number', function (req, res, next) {
    var numby = add(4, 5).toString();
    res.send(numby);
});
app.listen(5000, function () { return console.log('server listening on port 5000'); });
