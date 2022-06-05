import type { NextApiRequest, NextApiResponse } from 'next';

import { meetupApi } from '../../index';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
): void {
  if (req.method === 'POST') {
    // meetupApi.postMeetup(req, res);
  } else {
    meetupApi.getAll(req, res);
  }
}
