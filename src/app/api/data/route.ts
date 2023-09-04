import { NextApiRequest, NextApiResponse } from 'next';
import pool from '../db'

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM rentals');
    const results = { 'results': (result) ? result.rows : null};
    res.json = results;
    client.release();
  } 
  catch (err) {
    console.error(err);
  }
}

