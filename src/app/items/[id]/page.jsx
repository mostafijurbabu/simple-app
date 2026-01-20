import { use } from "react";

export default function ItemDetails({ params }) {
  const { id } = use(params);

  return <ItemContent id={id} />;
}

async function getItem(id) {
  try {
    const res = await fetch(`/api/items/${id}`, { cache: "no-store" });
    if (!res.ok) return null;
    return res.json();
  } catch (err) {
    console.error("Fetch error:", err);
    return null;
  }
}
  const item = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{item.name}</h1>
      <img
        src={item.image}
        alt={item.name}
        className="w-64 h-40 object-cover my-4"
      />
      <p>{item.description}</p>
      <p className="font-semibold">Price: {item.price}</p>
    </div>
  );
}
