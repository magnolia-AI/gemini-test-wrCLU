import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ui/product-card";
import Image from "next/image";

export default function Home() {
  const products = [
    {
      name: "Classic Baseball Cap",
      price: "$29.99",
      imageUrl: "https://images.unsplash.com/photo-1577221084210-911857989c5b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "A timeless baseball cap for everyday wear.",
    },
    {
      name: "Stylish Beanie",
      price: "$24.99",
      imageUrl: "https://images.unsplash.com/photo-1576871337036-3868587390a3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Keep warm and look cool with this comfortable beanie.",
    },
    {
      name: "Wide-Brim Sun Hat",
      price: "$34.99",
      imageUrl: "https://images.unsplash.com/photo-1534215754734-18e55d17b707?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Perfect for sunny days and outdoor adventures.",
    },
    {
      name: "Fedora Hat",
      price: "$49.99",
      imageUrl: "https://images.unsplash.com/photo-1596701092713-fdfd77a87e5b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "A classic and sophisticated fedora for any occasion.",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center bg-gray-900 text-white">
        <Image
          src="https://images.unsplash.com/photo-1521369909025-e8a9a6468349?q=80&w=2940&auto=format&fit=cover&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-50"
        />
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4">Discover Your Perfect Hat</h1>
          <p className="text-xl mb-8">Explore our diverse collection of stylish hats for every occasion.</p>
          <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-200">Shop Now</Button>
        </div>
      </section>

      {/* Products Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-4xl font-bold text-center mb-8">Our Latest Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
              description={product.description}
            />
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full bg-gray-100 py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Find Your Signature Style</h2>
        <p className="text-xl mb-8">Browse our full catalog and find the hat that speaks to you.</p>
        <Button size="lg">View All Products</Button>
      </section>
    </main>
  );
}

