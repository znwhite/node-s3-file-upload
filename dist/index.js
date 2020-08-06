"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
// route imports
var test = require('./routes/test/index');
// use routes
app.use('/test', test);
var add = function (a, b) { return a + b; };
app.get('/', function (req, res, next) {
    var numby = add(4, 5).toString();
    res.send(numby);
});
app.listen(5000, function () { return console.log('server listening on port 5000'); });
