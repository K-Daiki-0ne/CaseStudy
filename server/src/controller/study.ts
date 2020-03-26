import express from 'express';
import { StudyContent } from '../model/studyContent';

const router = express.Router();

router.get('/', (req, res) => {
  StudyContent.find((err: any, docs: any) => {
    if (!err) {
      res.send(docs)
    } else {
      console.error(`Failed to get data`);
    }
  })
})

export default router