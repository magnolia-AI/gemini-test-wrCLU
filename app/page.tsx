
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Placeholder for featured hats data
const featuredHats = [
  { id: 1, name: "Classic Fedora", description: "Timeless style for any occasion.", imageUrl: "https://images.unsplash.com/photo-1599753018745-3186176f7079?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "$75" },
  { id: 2, name: "Cozy Beanie", description: "Perfect for chilly days.", imageUrl: "https://images.unsplash.com/photo-1521369909128-33c168641090?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "$30" },
  { id: 3, name: "Stylish Baseball Cap", description: "Sporty and casual.", imageUrl: "https://images.unsplash.com/photo-1582337077479-003409517377?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "$40" },
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      {/* Hero Section */}
      <section className="w-full h-[70vh] relative flex items-center justify-center text-center">
        <Image 
          src="https://images.unsplash.com/photo-1504805095114-f4b40f54293c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Stylish person wearing a hat"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Your Perfect Hat</h1>
          <p className="text-lg md:text-xl mb-8">Explore our curated collection of hats for every style and season.</p>
          <Button variant="secondary" size="lg" asChild>
            <Link href="#featured-hats">Shop Now</Link>
          </Button>
        </div>
      </section>

      {/* Featured Hats Section */}
      <section id="featured-hats" className="py-16 px-4 md:px-24 w-full bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Hats</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredHats.map((hat) => (
            <Card key={hat.id} className="overflow-hidden transition-shadow duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="relative w-full h-64">
                  <Image 
                    src={hat.imageUrl}
                    alt={hat.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl mb-2">{hat.name}</CardTitle>
                <CardDescription>{hat.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-lg font-semibold">{hat.price}</span>
                <Button variant="outline" size="sm">Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-16 px-4 md:px-24 w-full text-center">
        <h2 className="text-3xl font-bold mb-8">Explore Our Collections</h2>
        <p className="text-lg text-gray-600 mb-12">Find the perfect hat for any style, from classic fedoras to modern beanies.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative h-48 rounded-lg overflow-hidden shadow-md cursor-pointer group transition-transform duration-300 hover:scale-105">
            <Image 
              src="https://images.unsplash.com/photo-1599753018745-3186176f7079?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Fedoras"
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white text-2xl font-bold group-hover:bg-opacity-50 transition-all duration-300">
              Fedoras
            </div>
          </div>
          <div className="relative h-48 rounded-lg overflow-hidden shadow-md cursor-pointer group transition-transform duration-300 hover:scale-105">
            <Image 
              src="https://images.unsplash.com/photo-1521369909128-33c168641090?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Beanies"
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white text-2xl font-bold group-hover:bg-opacity-50 transition-all duration-300">
              Beanies
            </div>
          </div>
          <div className="relative h-48 rounded-lg overflow-hidden shadow-md cursor-pointer group transition-transform duration-300 hover:scale-105">
            <Image 
              src="https://images.unsplash.com/photo-1582337077479-003409517377?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Caps"
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white text-2xl font-bold group-hover:bg-opacity-50 transition-all duration-300">
              Caps
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-gray-800 text-white py-8 px-4 md:px-24 mt-16">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Hat Store</h3>
            <p className="text-sm">Your one-stop shop for stylish headwear.</p>
          </div>
          <div className="flex space-x-4">
            <Link href="/about" className="hover:underline">About Us</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

