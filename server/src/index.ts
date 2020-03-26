import './config/db';
import express from 'express';
import bodyParser from 'body-parser';
import router from './controller/study';

const port: number = 4000;
const app: any = express()

app.use(bodyParser.json());
app.use('/', router)
app.listen(port, () => console.log(`Server listing on ${port}`));