import mongoose from 'mongoose';

export const message = mongoose.model('PostMessage', 
  {
    // Study title
    title: { type: String },
    // Study detail
    message: { type: String }
  }
);