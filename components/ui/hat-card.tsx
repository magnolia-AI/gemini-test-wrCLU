import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Hat } from '@/app/data/hats';

export function HatCard({ hat }: { hat: Hat }) {
  return (
    <Card className="transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <CardHeader>
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 mx-auto" />
      </CardHeader>
      <CardContent className="text-center">
        <CardTitle className="mb-2">{hat.name}</CardTitle>
        <p className="text-gray-600 mb-2">{hat.description}</p>
        <p className="text-lg font-bold">${hat.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="justify-center">
        <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
          Add to Cart
        </button>
      </CardFooter>
    </Card>
  );
}
