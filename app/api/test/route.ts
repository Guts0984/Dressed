import pool from "@/lib/db";

export async function GET() {
  const result = await pool.query("SELECT * FROM test");
  return new Response(JSON.stringify(result.rows), { status: 200 });
}
