import Image from "next/image";
import { API_URL } from "@/lib/api";

async function getItem(id) {
  const res = await fetch(`https://yes-omega-two.vercel.app/items/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) return null;
  return res.json();
}

export default async function ItemDetails({ params }) {
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
