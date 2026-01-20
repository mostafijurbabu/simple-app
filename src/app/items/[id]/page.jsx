import { use } from "react";

export default function ItemDetails({ params }) {
  const { id } = use(params);

  return <ItemContent id={id} />;
}

async function ItemContent({ id }) {
  const res = await fetch(`http://localhost:4000/items/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <h1>Item not found</h1>;
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
