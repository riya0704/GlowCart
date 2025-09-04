import ProductCard from '@/components/ProductCard';
import type { Product, ProductListResponse } from '@/types';

async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch('https://dummyjson.com/products?limit=20');
    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }
    const data: ProductListResponse = await res.json();
    return data.products;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold tracking-tight">Our Collection</h1>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">
          No products found. Please try again later.
        </p>
      )}
    </div>
  );
}
