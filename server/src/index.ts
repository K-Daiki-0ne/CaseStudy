import './config/index';
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config()

const port: number = 4000;
const app: any = express()

console.log(process.env.MONGO_URL);

app.listen(port, () => console.log(`Server listing on ${port}`));