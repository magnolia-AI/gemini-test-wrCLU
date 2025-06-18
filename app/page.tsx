
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1597019754172-c0174993c049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Example modern hat image
          alt="Modern Hats Collection"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10 flex flex-col items-center justify-center text-center p-5">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Discover Your Style</h1>
          <p className="text-xl md:text-2xl mb-8">
            Explore our curated collection of modern hats designed for every occasion.
          </p>
          <Button variant="secondary" size="lg">Shop Now</Button>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-4 md:px-10 w-full max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Hats</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1607946675907-06507091690e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Example hat 1
              alt="Hat 1"
              width={500}
              height={400}
              objectFit="cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">The Urban Fedora</h3>
              <p className="text-gray-600 mb-4">$75.00</p>
              <Button variant="outline" className="w-full">View Details</Button>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1593758113831-321477371a7e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Example hat 2
              alt="Hat 2"
              width={500}
              height={400}
              objectFit="cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">The Classic Beanie</h3>
              <p className="text-gray-600 mb-4">$45.00</p>
              <Button variant="outline" className="w-full">View Details</Button>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1607946675907-06507091690e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Example hat 3
              alt="Hat 3"
              width={500}
              height={400}
              objectFit="cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">The Stylish Cap</h3>
              <p className="text-gray-600 mb-4">$60.00</p>
              <Button variant="outline" className="w-full">View Details</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full bg-gray-100 py-16 px-4 md:px-10 text-center">
        <h2 className="text-4xl font-bold mb-6">Stay Ahead of the Trends</h2>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Sign up for our newsletter and be the first to know about new arrivals, exclusive offers, and style tips.
        </p>
        <div className="flex justify-center space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 border border-gray-300 rounded-md w-1/3 max-w-sm"
          />
          <Button size="lg">Subscribe</Button>
        </div>
      </section>
    </main>
  );
}

