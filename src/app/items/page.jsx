"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/items")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {items.map((item) => (
        <Link key={item.id} href={`/items/${item.id}`}>
          <div className="border p-2 rounded shadow cursor-pointer hover:shadow-lg transition">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover"
            />
            <h3 className="font-bold">{item.name}</h3>
            <p>{item.description}</p>
            <p className="text-green-600 font-semibold">৳ {item.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
