import express, { Router } from 'express';
import studyRouter from './v1/study';

const router: Router = express.Router();
router.use('/casestudy', studyRouter);

export default router