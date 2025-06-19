import ProductGrid from "@/components/ProductGrid";
import { Product } from "@/components/ProductCard"; // Assuming Product type is exported from ProductCard

// Sample Product Data - Hats
const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Classic Fedora",
    price: "$45.00",
    description: "A timeless fedora in charcoal grey. Perfect for adding a touch of class to any outfit. Made from 100% wool.",
    image: "https://images.unsplash.com/photo-1593942578042-83f1dc099910?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "2",
    name: "Summer Straw Hat",
    price: "$25.99",
    description: "Lightweight and breathable straw hat, ideal for sunny days. Features a wide brim for excellent sun protection.",
    image: "https://images.unsplash.com/photo-1562159273-130399120379?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "Urban Beanie",
    price: "$19.50",
    description: "A cozy and stylish beanie for a modern urban look. Soft knit fabric for maximum comfort.",
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "4",
    name: "Vintage Newsboy Cap",
    price: "$32.00",
    description: "Channel a vintage vibe with this classic newsboy cap. Made from a durable cotton blend.",
    image: "https://images.unsplash.com/photo-1621306903498-5f79116503c7?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "5",
    name: "Sporty Baseball Cap",
    price: "$22.75",
    description: "A comfortable and adjustable baseball cap, perfect for sports or casual wear. Embroidered logo detail.",
    image: "https://images.unsplash.com/photo-1588850561407-ed4062913174?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "6",
    name: "Elegant Sun Hat",
    price: "$55.00",
    description: "A wide-brimmed sun hat for ultimate elegance and protection. Features a decorative ribbon.",
    image: "https://images.unsplash.com/photo-1533512920498-0cf3e759a0f0?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "7",
    name: "Adventure Boonie Hat",
    price: "$30.00",
    description: "Durable and practical boonie hat for outdoor adventures. Features an adjustable chin strap and breathable fabric.",
    image: "https://images.unsplash.com/photo-1604176422839-3776c507f518?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "8",
    name: "Cozy Trapper Hat",
    price: "$48.50",
    description: "Stay warm in extreme cold with this faux fur-lined trapper hat. Ear flaps for extra protection.",
    image: "https://images.unsplash.com/photo-1607007544749-317ac47d867c?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-800 py-12">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-6xl md:text-7xl">
            HatStore
          </h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our curated collection of stylish hats. We have something for every head and occasion.
          </p>
        </header>
        
        <ProductGrid products={sampleProducts} />

        <footer className="text-center mt-20 py-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} HatStore. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
            Powered by Magnolia AI & Next.js
          </p>
        </footer>
      </div>
    </main>
  );
}

