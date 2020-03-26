import './config/index';
import express from 'express';
import bodyParser from 'body-parser';

const port: number = 4000;
const app: any = express()

app.listen(port, () => console.log(`Server listing on ${port}`));