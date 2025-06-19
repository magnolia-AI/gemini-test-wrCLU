export type Hat = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
};

export const hats: Hat[] = [
  {
    id: 1,
    name: "Classic Fedora",
    description: "Timeless wool fedora with grosgrain ribbon",
    price: 45.99,
    category: "formal",
    imageUrl: ""
  },
  {
    id: 2,
    name: "Beanie",
    description: "Warm acrylic beanie for cold days",
    price: 24.99,
    category: "casual",
    imageUrl: ""
  },
  {
    id: 3,
    name: "Baseball Cap",
    description: "Adjustable cotton cap with embroidered logo",
    price: 29.99,
    category: "sports",
    imageUrl: ""
  },
  {
    id: 4,
    name: "Sun Hat",
    description: "Wide-brimmed hat for sun protection",
    price: 35.99,
    category: "summer",
    imageUrl: ""
  },
  {
    id: 5,
    name: "Bucket Hat",
    description: "Trendy canvas bucket hat",
    price: 27.99,
    category: "casual",
    imageUrl: ""
  },
  {
    id: 6,
    name: "Beret",
    description: "French-style wool beret",
    price: 32.99,
    category: "formal",
    imageUrl: ""
  }
];
