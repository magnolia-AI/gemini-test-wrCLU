import ProductCard from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    id: "1",
    name: "Classic Fedora",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1590421615970-027d0e91996b?q=80&w=1287&auto=format&fit=crop",
    description: "A timeless classic, perfect for any occasion.",
    category: "Fedora",
  },
  {
    id: "2",
    name: "Sporty Baseball Cap",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1588850561407-ed404c50c57c?q=80&w=1287&auto=format&fit=crop",
    description: "Stay cool and stylish with this sporty cap.",
    category: "Baseball Cap",
  },
  {
    id: "3",
    name: "Cozy Beanie",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1315&auto=format&fit=crop",
    description: "Keep warm in style with this soft beanie.",
    category: "Beanie",
  },
  {
    id: "4",
    name: "Elegant Sun Hat",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1575428652377-a3d80e28149e?q=80&w=1287&auto=format&fit=crop",
    description: "Protect yourself from the sun with this elegant hat.",
    category: "Sun Hat",
  },
  {
    id: "5",
    name: "Trendy Bucket Hat",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1605399539123-0d2911009180?q=80&w=1287&auto=format&fit=crop",
    description: "A fashionable choice for a casual look.",
    category: "Bucket Hat",
  },
  {
    id: "6",
    name: "Stylish Panama Hat",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1562159278-1253a58da141?q=80&w=1287&auto=format&fit=crop",
    description: "Lightweight and breathable, perfect for summer.",
    category: "Panama Hat",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
              Discover Your Perfect Hat
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl py-4">
              Browse our curated collection of stylish hats for every occasion.
            </p>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold tracking-tighter">Featured Hats</h2>
              <Badge variant="outline">New Arrivals</Badge>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

