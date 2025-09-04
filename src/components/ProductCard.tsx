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
import { Heart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden rounded-2xl border-0 bg-card shadow-sm transition-all">
      <CardHeader className="p-0">
        <Link href={`/products/${product.id}`} className="block">
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={400}
            height={400}
            className="aspect-square w-full rounded-2xl object-cover"
            data-ai-hint="cosmetics product"
          />
        </Link>
      </CardHeader>
      <CardContent className="flex-grow p-3 pb-0">
        <Link href={`/products/${product.id}`}>
          <CardTitle className="mb-1 text-base font-medium leading-tight hover:text-primary">
            {product.title}
          </CardTitle>
        </Link>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-3 pt-1">
        <p className="text-base font-semibold text-foreground">
          ${product.price.toFixed(2)}
        </p>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Heart className="h-5 w-5 text-muted-foreground" />
        </Button>
      </CardFooter>
    </Card>
  );
}
