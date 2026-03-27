import { Pool } from "pg";

const pool = new Pool({
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
  maxLifetimeSeconds: 60,
});

export default pool;

//docker exec -it shop-db-1 psql -U user -d shop
