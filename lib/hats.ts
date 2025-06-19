export interface Hat {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
}

export const hats: Hat[] = [
  {
    id: '1',
    name: 'Classic Fedora',
    price: '$49.99',
    imageUrl: 'https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Summer Straw Hat',
    price: '$39.99',
    imageUrl: 'https://images.unsplash.com/photo-1562157970-594833a7e019?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Wool Beanie',
    price: '$29.99',
    imageUrl: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Baseball Cap',
    price: '$24.99',
    imageUrl: 'https://images.unsplash.com/photo-1588850561407-ed404c50dc77?q=80&w=1000&auto=format&fit=crop',
  },
];

