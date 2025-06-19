import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from 'next/image';

const placeholderProducts = [
  {
    id: '1',
    name: 'Classic Fedora',
    price: '$49.99',
    image: 'https://images.unsplash.com/photo-1533055640609-24b45843f9a6?q=80&w=1200&auto=format&fit=crop', // Replace with actual image path or URL
    description: 'A timeless fedora for a sophisticated look.'
  },
  {
    id: '2',
    name: 'Summer Straw Hat',
    price: '$39.99',
    image: 'https://images.unsplash.com/photo-1562853749-567400be9fde?q=80&w=1200&auto=format&fit=crop', // Replace with actual image path or URL
    description: 'Light and airy, perfect for sunny days.'
  },
  {
    id: '3',
    name: 'Urban Beanie',
    price: '$24.99',
    image: 'https://images.unsplash.com/photo-1576879410982-5e29c6cc3b8f?q=80&w=1200&auto=format&fit=crop', // Replace with actual image path or URL
    description: 'Stay warm and stylish in the city.'
  },
  {
    id: '4',
    name: 'Elegant Sun Hat',
    price: '$59.99',
    image: 'https://images.unsplash.com/photo-1508852900944-814034381046?q=80&w=1200&auto=format&fit=crop', // Replace with actual image path or URL
    description: 'Wide-brimmed for maximum sun protection and style.'
  }
];

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Explore Our Hat Collection</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {placeholderProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <CardHeader className="p-0">
              <Image 
                src={product.image} 
                alt={product.name} 
                width={400} 
                height={300} 
                className="object-cover w-full h-64" 
              />
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="text-xl font-semibold text-gray-700 mb-2">{product.name}</CardTitle>
              <CardDescription className="text-gray-600 mb-4 h-16 overflow-hidden">{product.description}</CardDescription>
              <p className="text-2xl font-bold text-gray-800 mb-4">{product.price}</p>
              <Link href={`/product/${product.id}`} passHref>
                <span className="inline-block bg-slate-800 text-white text-center font-semibold py-2 px-6 rounded-lg hover:bg-slate-700 transition-colors duration-300 w-full">
                  View Details
                </span>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

