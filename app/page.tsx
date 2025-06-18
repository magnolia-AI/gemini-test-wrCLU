import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  const products = [
    {
      id: "1",
      name: "Classic Baseball Cap",
      price: 29.99,
      imageUrl:
        "https://images.unsplash.com/photo-1577520087114-c8b746c76135?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "2",
      name: "Stylish Beanie",
      price: 24.99,
      imageUrl:
        "https://images.unsplash.com/photo-1590130637959-c29759e612f0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "3",
      name: "Sun Hat",
      price: 34.99,
      imageUrl:
        "https://images.unsplash.com/photo-1534215754734-18e55208699c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "4",
      name: "Fedora",
      price: 49.99,
      imageUrl:
        "https://images.unsplash.com/photo-1521119989508-f47267f51798?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="relative w-full h-[500px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1507680463926-9a2c07923701?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        <div className="relative z-10 text-center text-white p-4 bg-black bg-opacity-40 rounded-lg">
          <h1 className="text-5xl font-bold tracking-tight mb-4">
            Find Your Perfect Hat
          </h1>
          <p className="text-xl mb-8">
            Explore our collection of stylish hats for every occasion.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-200">
            Shop Now
          </Button>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-8 md:mb-12">
            Our Latest Collection
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

