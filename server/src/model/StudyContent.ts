import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const Model = mongoose.model

const StudyContentSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  detail: {
    type: String,
    required: true
  },
})

export const StudyContent = Model('StudyContent', StudyContentSchema)