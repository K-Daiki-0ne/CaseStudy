import express, { Router } from 'express';
import {
  get,
  register,
  update,
  remove
} from '../../controller/studyController';

const studyRouter: Router = express.Router();

studyRouter.get('/', get);
studyRouter.post('/', register);
studyRouter.put('/:id', update);
studyRouter.delete('/:id', remove);

export default studyRouter;