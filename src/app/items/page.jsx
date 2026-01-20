import Image from "next/image";

const res = await fetch(`https://simple-frontend.vercel.app/api/items/${id}`, {
  cache: "no-store",
});

async function getItems() {
  try {
    const res = await fetch(`/api/items`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch items");
    return res.json();
  } catch (err) {
    console.error("Fetch error:", err);
    return [];
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
