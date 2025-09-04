import ProductCard from '@/components/ProductCard';
import type { Product, ProductListResponse } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, SlidersHorizontal } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

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
    <div className="bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold tracking-tight">
            Best Products
          </h1>
          <p className="text-muted-foreground">{products.length} products</p>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-2 gap-4">
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
    </div>
  );
}
