import Image from "next/image";

const res = await fetch(`https://simple-frontend.vercel.app/api/items/${id}`, {
  cache: "no-store",
});

async function getItem(id) {
  try {
    const res = await fetch(`${API_URL}/items/${id}`, { cache: "no-store" });
    if (!res.ok) {
      console.error("Backend returned status:", res.status);
      return null;
    }
    return res.json();
  } catch (err) {
    console.error("Fetch error:", err);
    return null;
  }
}

export default async function ItemPage({ params }) {
  const { id } = params;
  const res = await fetch(`/api/items/${id}`, { cache: "no-store" });
  if (!res.ok) return <p>Item not found or server error.</p>;
  const item = await res.json();

  return (
    <div>
      <h1>{item.name}</h1>
      <Image src={item.image} width={400} height={300} alt={item.name} />
      <p>{item.description}</p>
      <p>Price: {item.price}</p>
    </div>
  );
}
