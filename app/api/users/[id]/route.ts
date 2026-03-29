import { getUserById } from "@/features/users/user.queries";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const result = await getUserById(Number(id));
    return Response.json(result, { status: 200 });
  } catch (err) {
    return new Response("Error: " + err, { status: 500 });
  }
}
