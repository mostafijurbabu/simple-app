const API_URL = "https://yes-dmelz79we-mostafijurs-projects.vercel.app";

export async function GET() {
  try {
    const res = await fetch(`${API_URL}/items`);
    const data = await res.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (err) {
    console.error("Backend fetch error:", err);
    return new Response(JSON.stringify({ message: "Failed to fetch" }), {
      status: 500,
    });
  }
}
