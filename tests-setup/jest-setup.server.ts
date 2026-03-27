// import pool from "@/lib/db";

// beforeAll(async () => {
//   const tables = [
//     "users",
//     "products",
//     "orders",
//     "order_items",
//     "cart_items",
//     "carts",
//   ];

//   // TRUNCATE is faster, CASCADE handles foreign keys, RESTART IDENTITY resets IDs to 1
//   await pool.query(
//     `TRUNCATE TABLE ${tables.join(", ")} RESTART IDENTITY CASCADE;`,
//   );
// });
