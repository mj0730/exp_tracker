import mongoose from 'mongoose';

const Schema = new mongoose.Schema(
  {
    inputData: [
      {
        agency: String,
        facility: String,
        type: { type: { type: String } },
      },
    ],
    offerData: [String],
    offerYear: String,
  },
  { timestamps: true }
);

const Submission = mongoose.models['submissions'] || mongoose.model('submissions', Schema); // for hot module development

export default Submission;
