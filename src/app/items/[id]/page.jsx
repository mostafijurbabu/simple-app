import Image from "next/image";
import { API_URL } from "@/lib/api";

async function getItem(id) {
  try {
    const res = await fetch(`${API_URL}/items/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) return null;
    return res.json();
  } catch (err) {
    console.error("Fetch error:", err);
    return null;
  }
}

export default async function ItemDetails({ params }) {
  // 🔥 params Promise — MUST await
  const { id } = await params;

  const item = await getItem(id);

  if (!item) {
    return <p>Item not found</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{item.name}</h1>

      <Image
        src={item.image}
        width={400}
        height={300}
        alt={item.name}
        className="my-4"
      />

      <p>{item.description}</p>
      <p className="font-semibold">Price: {item.price} BDT</p>
    </div>
  );
}
