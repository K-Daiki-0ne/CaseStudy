import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/caseStudy', err => {
  if (!err) {
    console.log('mongoDB connection success!');
  } else {
    console.log('Failed to connection mongoDB' + JSON.stringify(err, undefined, 2));
  }
})