import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

const url: string = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/caseStudy';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, 
  err => {
    if (!err) {
      console.log('mongoDB connection success!');
    } else {
      console.log('Failed to connection mongoDB' + JSON.stringify(err, undefined, 2));
    }
  }
)