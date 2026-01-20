import Image from "next/image";

const API_URL = "https://yes-dmelz79we-mostafijurs-projects.vercel.app";

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
  const item = await getItem(id);

  if (!item) return <p>Item not found or server error.</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{item.name}</h1>
      <Image
        src={item.image}
        width={400}
        height={300}
        alt={item.name}
        className="object-cover"
      />
      <p>{item.description}</p>
      <p className="font-semibold mt-2">Price: {item.price} BDT</p>
    </div>
  );
}
