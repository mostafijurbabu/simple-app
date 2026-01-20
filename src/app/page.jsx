import Image from "next/image";

const API_URL = "https://simple-server.vercel.app";

async function getItems() {
  const res = await fetch(`${API_URL}/items`, { cache: "no-store" }); // cache: 'no-store' prevents caching
  if (!res.ok) {
    throw new Error("Failed to fetch items");
  }
  return res.json();
}

export default async function Home() {
  const items = await getItems(); // server-side fetch

  return (
    <div>
      <section>Hero</section>
      <section>Features</section>
      <section>How It Works</section>

      {/* Items Section */}
      <section>
        <h2>Products</h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {items.map((item) => (
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
          ))}
        </div>
      </section>

      <section>Pricing</section>
      <section>Testimonials</section>
      <section>FAQ</section>
      <section>Call To Action</section>
    </div>
  );
}
