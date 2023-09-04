// utils/db.js
import { Pool } from 'pg';

const pool = new Pool({
  url: process.env.PGURL, 
  ssl: {
    rejectUnauthorized: false
  }
});

export default pool;

