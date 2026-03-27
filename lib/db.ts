import { Pool } from "pg";

const isTest = process.env.NODE_ENV === "test";

const pool = new Pool({
  database: isTest ? "shop_test" : "shop",
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
  maxLifetimeSeconds: 60,
});

export default pool;

//docker exec -it shop-db-1 psql -U user -d shop
