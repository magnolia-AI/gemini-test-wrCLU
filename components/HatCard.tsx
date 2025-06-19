import Image from 'next/image';

interface Hat {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
}

interface HatCardProps {
  hat: Hat;
}

export default function HatCard({ hat }: HatCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="relative w-full h-64">
        <Image
          src={hat.imageUrl}
          alt={hat.name}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{hat.name}</h3>
        <p className="text-gray-700">{hat.price}</p>
      </div>
    </div>
  );
}

