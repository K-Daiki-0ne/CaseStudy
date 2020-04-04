import './config/db';
import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './controller/study';

const port: number = 4000;
const app: Application = express()

const cliUrl: string = 'http://localhost:3000'

app.use(bodyParser.json());
app.use(cors({ origin: cliUrl }));
app.use('/', router);
app.listen(port, () => console.log(`Server listing on ${port}`));