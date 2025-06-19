"use client";
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export interface Product {
  id: string;
  name: string;
  price: string; // Keep as string if it includes currency symbols like '$'
  description: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" } 
    },
  };

  return (
    <motion.div variants={cardVariants} className="h-full flex flex-col">
      <Card className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col flex-grow">
        <CardHeader className="p-0">
          <div className="aspect-[4/3] relative overflow-hidden"> {/* Changed aspect ratio for better visuals */}
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" // Added sizes for optimization
              className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>
        </CardHeader>
        <CardContent className="p-6 flex-grow">
          <CardTitle className="text-2xl font-bold mb-2">{product.name}</CardTitle>
          <p className="text-muted-foreground text-sm mb-4 h-20 overflow-hidden">
            {product.description}
          </p>
          <p className="text-xl font-semibold text-foreground mb-4">{product.price}</p>
        </CardContent>
        <CardFooter className="p-6 pt-0 mt-auto"> {/* Ensure footer is at the bottom */}
          <Button className="w-full hover:bg-primary/90 transition-colors">Add to Cart</Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

