import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20 md:py-32">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534215745014-785669121411?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
      ></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 drop-shadow-lg">
          Find Your Perfect Hat
        </h1>
        <p className="text-xl md:text-2xl text-purple-100 mb-10 max-w-2xl mx-auto drop-shadow-md">
          Explore our curated collection of stylish hats for every season and occasion. Quality craftsmanship, unbeatable style.
        </p>
        <Link href="/shop">
          <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50 text-lg font-semibold px-10 py-6 rounded-lg shadow-xl transition-transform transform hover:scale-105">
            Shop Collection
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;

