\
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <CardHeader className="p-0">
        <div className="relative w-full h-60">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <div className="flex justify-between items-center mb-2">
          <CardTitle className="text-xl font-semibold">{product.name}</CardTitle>
          <Badge variant="secondary">{product.category}</Badge>
        </div>
        <p className="text-sm text-gray-600 mb-4">{product.description}</p>
      </CardContent>
      <CardFooter className="p-6 bg-gray-50">
        <div className="flex items-center justify-between w-full">
          <p className="text-2xl font-bold text-purple-600">${product.price.toFixed(2)}</p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white transition-colors">
            Add to Cart
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

