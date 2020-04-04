import './config/db';
import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './controller/study';

const port: number = 4000;
const app: Application = express()

const clientUrl: string = 'http://localhost:3000'

app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3000' }));
app.use('/', router);
app.listen(port, () => console.log(`Server listing on ${port}`));