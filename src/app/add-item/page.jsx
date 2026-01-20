"use client";

export default function AddItemPage() {
  async function handleSubmit(e) {
    e.preventDefault();

    await fetch("http://localhost:4000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "New Item",
        description: "Description",
        price: 1000,
        image: "https://via.placeholder.com/300",
      }),
    });

    alert("Item added successfully");
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Add New Item</h1>

      <form onSubmit={handleSubmit}>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}
