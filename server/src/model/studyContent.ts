import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const StudyContentSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  detail: {
    type: String,
    required: true
  },
  data: {
    type: Date,
    default: Date.now
  }
})

export const StudyContent = mongoose.model('StudyContent', StudyContentSchema)