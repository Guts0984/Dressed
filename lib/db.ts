import { Pool } from "pg";

const isProduction = process.env.NODE_ENV === "production";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: isProduction ? { rejectUnauthorized: false } : false,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
  maxLifetimeSeconds: 60,
});

export default pool;

//docker exec -it dressed-db psql -U user -d shop
//https://unsplash.com/s/photos/jacket?license=free
//http://localhost:3000/api/auth/callback/google google redirect
//cloudflare r2
//React Three Fiber
//mediumrare1298@gmail.com
//password
