// utils/db.js
import { Pool } from 'pg';

const pool = new Pool({
  // url: process.env.PGURL, 
  password: process.env.PGPASSWORD,
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  max: 20,
  ssl: {
    rejectUnauthorized: false
  }
});

export default pool;

