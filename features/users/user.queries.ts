import pool from "@/lib/db";

export async function getAllUsers() {
  try {
    const result = await pool.query("SELECT * FROM users");
    return result.rows;
  } catch (err) {
    console.log(err);
  }
}
