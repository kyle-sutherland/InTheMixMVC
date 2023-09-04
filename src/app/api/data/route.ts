import pool from '../db'
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const client = await pool.connect();
    const res = await client.query('SELECT * FROM rentals');
    const data = await res;
    client.release();
    return NextResponse.json({ data })
  } 
  catch (err) {
    console.error(err);
  }
}

