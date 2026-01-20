import { cookies } from "next/headers";

export async function POST(req) {
  const { email, password } = await req.json();

  if (email === "admin@test.com" && password === "123456") {
    cookies().set("token", "logged-in", { httpOnly: true });
    return Response.json({ success: true });
  }

  return Response.json({ success: false }, { status: 401 });
}
