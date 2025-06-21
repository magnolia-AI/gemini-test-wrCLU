import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  name: string;
  price: string;
  imageUrl: string;
  description: string;
}

export function ProductCard({ name, price, imageUrl, description }: ProductCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Image src={imageUrl} alt={name} width={400} height={300} objectFit="cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-2xl font-bold text-gray-800 mb-4">{price}</p>
        <Button className="w-full">Add to Cart</Button>
      </div>
    </div>
  );
}

