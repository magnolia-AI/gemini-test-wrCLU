import ProductGrid from "@/components/ProductGrid";
import { Product } from "@/components/ProductCard"; // Assuming Product type is exported from ProductCard

// Sample Product Data
const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Cool Gadget X",
    price: "$99.99",
    description: "An amazing gadget that will revolutionize your daily life. Sleek design, powerful features, and easy to use. Get yours today!",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop", // Replace with actual image URL
  },
  {
    id: "2",
    name: "Modern Watch Z",
    price: "$149.50",
    description: "Stay stylish and punctual with this modern timepiece. Features a minimalist design and durable materials for everyday wear.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop", // Replace with actual image URL
  },
  {
    id: "3",
    name: "Wireless Buds Pro",
    price: "$79.00",
    description: "Experience immersive sound with these premium wireless earbuds. Long battery life and comfortable fit for all-day listening.",
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?q=80&w=1000&auto=format&fit=crop", // Replace with actual image URL
  },
  {
    id: "4",
    name: "Smart Home Hub",
    price: "$129.99",
    description: "Control your smart home devices with ease using this central hub. Voice control, app integration, and customizable routines.",
    image: "https://images.unsplash.com/photo-1518444065439-e933c06ce9ce?q=80&w=1000&auto=format&fit=crop", // Replace with actual image URL
  },
   {
    id: "5",
    name: "Ergonomic Keyboard",
    price: "$89.99",
    description: "Type comfortably for hours with this ergonomic keyboard. Split design and cushioned palm rest for improved posture.",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "6",
    name: "HD Webcam",
    price: "$49.75",
    description: "Crystal clear video calls with this HD webcam. Built-in microphone and wide-angle lens for professional meetings.",
    image: "https://images.unsplash.com/photo-1609929983422-47343807a9b0?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "7",
    name: "Portable SSD 1TB",
    price: "$119.00",
    description: "Carry your files with speed and style. This portable SSD offers 1TB of storage with fast transfer rates.",
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=1000&auto=format&fit=crop", // A generic tech image, can be replaced
  },
  {
    id: "8",
    name: "Gaming Mouse RGB",
    price: "$65.50",
    description: "Dominate your games with this high-precision gaming mouse. Customizable RGB lighting and programmable buttons.",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-800 py-12">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-6xl md:text-7xl">
            Welcome to Our Store!
          </h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our curated collection of amazing products. We have something for everyone.
          </p>
        </header>
        
        <ProductGrid products={sampleProducts} />

        <footer className="text-center mt-20 py-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Your Awesome Storefront. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
            Powered by Magnolia AI & Next.js
          </p>
        </footer>
      </div>
    </main>
  );
}
