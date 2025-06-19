import ProductCard, { Product } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  title?: string;
}

const ProductGrid = ({ products, title = "Featured Hats" }: ProductGridProps) => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 md:mb-16">
          {title}
        </h2>
        {products.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">No hats to display at the moment. Check back soon!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;

