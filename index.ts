import express, { Express, Request, Response } from "express";
import articleController from "./controllers/articlecontroller";
import commentController from "./controllers/commentController";
import authorController from "./controllers/authorController";
import mongoose from "mongoose";
const app: Express = express();
const bodyParser = require('body-parser')
const database = mongoose.connection;



mongoose.connect("mongodb+srv://viktorlumiste:CSzEnq0IYUPeqyEu@cluster0.xqpurvt.mongodb.net/test");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});
app.use('/', articleController);
app.use('/', commentController);
app.use('/', authorController);
app.listen(3000,() => {
    console.log(`[server]: Server is running at http://localhost:3000`);
});