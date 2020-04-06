import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

const url: string = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/caseStudy';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, 
  err => {
    if (!err) {
      console.log('DB connection ...Ok');
    } else {
      console.log('DB connection ...No');
    }
  }
)