import dbConnect from '../../db/mongodb';
import Submission from '../../db/schema';

export default async (req, res) => {
  if (req.method == 'POST') {
    await dbConnect();

    const data = req.body;
    const submission = new Submission(data);
    submission.save((e) => {
      if (e) {
        console.error(e);
        res.status(500).json({ e });
      }
    });

    res.status(200).json({ msg: 'Data saved successfully', data: data });
  } else {
    res.status(501).json({ msg: 'Unsupported HTTP method' });
  }
};
