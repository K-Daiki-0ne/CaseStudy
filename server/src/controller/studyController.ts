import { Request, Response } from 'express';
import { StudyContent } from '../model/StudyContent';
import mongoose from 'mongoose';

const objId = mongoose.Types.ObjectId;

export const get = async (req: Request, res: Response) => {
  await StudyContent.find((err, result) => {
    if (!err) {
      console.log('Send ...Ok');
      res.send(result);
    } else {
      console.log('Send ...No');
    }
  })
};

export const register = (req: Request, res: Response) => {
  let newStudy = new StudyContent({
    title: req.body.title,
    detail: req.body.detail
  });

  newStudy.save((err, result) => {
    if(!err) {
      console.log('Post ...Ok');
      res.send(result);
    } else {
      console.log('Post ...No');
    }
  })
};

export const update = (req: Request, res: Response) => {
  if(!objId.isValid(req.params.id)) {
    return res.status(400).send(`Nothing record with given id: ${req.params.id}`);
  } 
  let updStudy = {
    title: req.body.title,
    detail: req.body.detail
  };
  StudyContent.findByIdAndUpdate(req.params.id, { $set: updStudy }, { new: true }, (err, result) => {
    if (!err) {
      console.log('Update ...Ok')
      res.send(result);
    } else {
      console.log(`Update ...No`);
    }
  });
  
};

export const remove = (req: Request, res: Response) => {
  if(!objId.isValid(req.params.id)) {
    return res.status(400).send(`No data with given id: ${req.params.id}`)
  } else {
    StudyContent.findByIdAndRemove(req.params.id, (err, result) => {
      if(!err) {
        console.log('Delete ...Ok')
        res.send(result);
      } else {
        console.log(`Delete ...No`);
      }
    })
  }
}