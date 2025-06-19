import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  description?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out group">
      <CardHeader className="p-0">
        <div className="aspect-square overflow-hidden relative">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-2xl font-semibold text-gray-800 mb-2 truncate group-hover:text-purple-600 transition-colors">
          {product.name}
        </CardTitle>
        <p className="text-lg font-bold text-purple-700 mb-4">{product.price}</p>
        {product.description && <p className="text-sm text-gray-600 mb-4 h-12 overflow-hidden text-ellipsis">{product.description}</p>}
      </CardContent>
      <CardFooter className="p-6 bg-gray-50">
        <Link href={`/product/${product.id}`} className="w-full">
          <Button variant="outline" className="w-full group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
            View Details <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

