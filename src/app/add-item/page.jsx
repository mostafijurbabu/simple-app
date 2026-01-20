"use client";

export default function AddItem() {
  async function handleSubmit(e) {
    e.preventDefault();

    await fetch("http://localhost:4000/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "New Item",
        description: "Description",
        price: 1000,
      }),
    });

    alert("Item added successfully");
  }

  return <button onClick={handleSubmit}>Add Item</button>;
}
