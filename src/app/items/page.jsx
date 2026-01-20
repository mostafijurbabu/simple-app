import Image from "next/image";
import Link from "next/link";
import { API_URL } from "@/lib/api";

async function getItems() {
  const res = await fetch("https://yes-omega-two.vercel.app/items", {
    cache: "no-store",
  });
  const items = await res.json();
  return items;
}

export default async function ItemsPage() {
  const items = await getItems();

  if (items.length === 0) return <p>No items found.</p>;

  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map((item) => (
        <Link key={item.id} href={`/items/${item.id}`}>
          <div className="border p-4">
            <Image src={item.image} width={300} height={200} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
