import mongoose from 'mongoose';

const Schema = new mongoose.Schema(
  {
    inputData: [
      {
        _id: false,
        agency: String,
        facility: String,
        type: { type: String },
      },
    ],
    offerData: [String],
    offerYear: String,
  },
  { timestamps: true }
);

const Submission = mongoose.models['submissions'] || mongoose.model('submissions', Schema); // for hot module development

export default Submission;
