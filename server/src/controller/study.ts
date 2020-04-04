// import express from 'express';
// import { StudyContent } from '../model/StudyContent';
// import mongoose from 'mongoose';

// const objId = mongoose.Types.ObjectId;

// const router = express.Router();

// router.get('/', (req, res) => {
//   StudyContent.find((err, result) => {
//     if (!err) {
//       res.send(result)
//     } else {
//       console.error(`Failed to get data`);
//     }
//   })
// });

// router.post('/', (req, res) => {
//   let newStudy = new StudyContent({
//     title: req.body.title,
//     detail: req.body.detail,
//   })

//   newStudy.save((err, result) => {
//     if(!err) {
//       res.send(result);
//     } else {
//       console.log(`Sorry... failed to create new study`);
//     }
//   });
// });

// router.put('/:id', (req, res) => {
//   if (!objId.isValid(req.params.id)) {
//     return res.status(400).send(`Nothing record with given id: ${req.params.id}`)
//   } else {
//     let updStudy = {
//       title: req.body.title,
//       detail: req.body.detail,
//     };
//     StudyContent.findByIdAndUpdate(req.params.id, { $set: updStudy }, { new: true }, (err, result) => {
//       if (!err) {
//         res.send(result);
//       } else {
//         console.log(`Update error: ${err}`);
//       }
//     });
//   }
// });

// router.delete('/:id', (req, res) => {
//   if(!objId.isValid(req.params.id)) {
//     return res.status(400).send(`No data with given id: ${req.params.id}`)
//   } else {
//     StudyContent.findByIdAndRemove(req.params.id, (err, result) => {
//       if(!err) {
//         res.send(result);
//       } else {
//         console.log(`Sorry failed to delete data`);
//       }
//     })
//   }
// });

// export default router