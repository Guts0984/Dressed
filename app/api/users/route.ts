import { getAllUsers } from "@/features/users/user.queries";

export async function GET() {
  try {
    const result = await getAllUsers();
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (err) {
    return new Response("Error: " + err, { status: 500 });
  }
}
