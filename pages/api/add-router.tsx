import { NextApiRequest, NextApiResponse } from 'next';
require('../../middleware/db/mongoose');

export default async (request: NextApiRequest, response: NextApiResponse) => {
  return response
    .status(500)
    .json({ success: true});
};
