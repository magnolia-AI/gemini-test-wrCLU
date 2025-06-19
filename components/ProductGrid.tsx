"use client";
import ProductCard, { Product } from "@/components/ProductCard";
import { motion } from "framer-motion";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (!products || products.length === 0) {
    return <p className="text-center text-muted-foreground">No products to display.</p>;
  }

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger animation of children
        delayChildren: 0.2,   // Delay before children start animating
      },
    },
  };

  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4 md:p-8"
      variants={gridVariants}
      initial="hidden"
      animate="visible"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </motion.div>
  );
}

