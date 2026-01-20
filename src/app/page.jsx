import Image from "next/image";

const API_URL = "https://yes-dmelz79we-mostafijurs-projects.vercel.app";

async function getItems() {
  try {
    const res = await fetch(`${API_URL}/items`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch items");
    return res.json();
  } catch (err) {
    console.error(err);
    return []; // fallback empty array
  }
}

export default async function Home() {
  const items = await getItems();

  return (
    <div>
      <section>Hero</section>
      <section>Features</section>
      <section>How It Works</section>

      <section>
        <h2>Products</h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {items.length === 0 ? (
            <p>No products available.</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="border p-4 rounded shadow">
                <Image
                  src={item.image}
                  width={300}
                  height={200}
                  alt={item.name}
                  className="object-cover"
                />
                <h3 className="font-bold mt-2">{item.name}</h3>
                <p>{item.description}</p>
                <p className="font-semibold mt-1">Price: {item.price} BDT</p>
              </div>
            ))
          )}
        </div>
      </section>

      <section>Pricing</section>
      <section>Testimonials</section>
      <section>FAQ</section>
      <section>Call To Action</section>
    </div>
  );
}
