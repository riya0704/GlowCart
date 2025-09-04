import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/types';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        <Link href={`/products/${product.id}`} className="block">
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={400}
            height={400}
            className="aspect-square w-full object-cover"
            data-ai-hint="cosmetics product"
          />
        </Link>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <Link href={`/products/${product.id}`}>
          <CardTitle className="mb-1 text-lg font-semibold leading-tight hover:text-primary">
            {product.title}
          </CardTitle>
        </Link>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <p className="text-xl font-bold text-primary">${product.price.toFixed(2)}</p>
        <Button size="sm">Add to Bag</Button>
      </CardFooter>
    </Card>
  );
}
