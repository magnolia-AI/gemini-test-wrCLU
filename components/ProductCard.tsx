import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <CardHeader className="p-0">
        <div className="aspect-square relative overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-2xl font-bold mb-2">{product.name}</CardTitle>
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 h-20 overflow-hidden">
          {product.description}
        </p>
        <p className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{product.price}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full hover:bg-primary/90 transition-colors">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}
