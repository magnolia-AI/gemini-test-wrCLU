import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import { Product } from "@/components/ProductCard"; // Assuming Product type is exported from ProductCard

const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Classic Fedora",
    price: "$49.99",
    imageUrl: "https://images.unsplash.com/photo-1533055640609-24b45843f9a7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A timeless fedora in charcoal grey, perfect for any sophisticated look."
  },
  {
    id: "2",
    name: "Summer Straw Hat",
    price: "$29.99",
    imageUrl: "https://images.unsplash.com/photo-1562159273-13039912035d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Lightweight and breathable, ideal for sunny days and beach outings."
  },
  {
    id: "3",
    name: "Urban Beanie",
    price: "$24.99",
    imageUrl: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A cozy and stylish beanie for a modern, casual look."
  },
  {
    id: "4",
    name: "Vintage Flat Cap",
    price: "$39.99",
    imageUrl: "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A classic flat cap with a vintage touch, made from premium wool."
  },
    {
    id: "5",
    name: "Sporty Baseball Cap",
    price: "$22.50",
    imageUrl: "https://images.unsplash.com/photo-1588850561407-ed4062913355?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A comfortable and adjustable baseball cap, perfect for everyday wear."
  },
  {
    id: "6",
    name: "Elegant Sun Hat",
    price: "$55.00",
    imageUrl: "https://images.unsplash.com/photo-1508899119433-19c8ae9b7e36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Wide-brimmed sun hat for maximum protection and style."
  },
  {
    id: "7",
    name: "Knit Winter Cap",
    price: "$30.00",
    imageUrl: "https://images.unsplash.com/photo-1605001018704-9907b7a59934?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Warm and soft knit cap to keep you cozy during winter."
  },
  {
    id: "8",
    name: "Adventurer's Safari Hat",
    price: "$65.00",
    imageUrl: "https://images.unsplash.com/photo-1590334800902-dd3c6983008d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Durable and functional safari hat for your outdoor adventures."
  }
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductGrid products={sampleProducts} title="Our Signature Collection" />
      {/* You can add more sections here, like featured categories, testimonials, etc. */}
    </>
  );
}

