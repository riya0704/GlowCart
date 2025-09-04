import Image from 'next/image';
import type { Product } from '@/types';
import { Star, CheckCircle, Truck, ShieldCheck, Undo2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

async function getProduct(id: string): Promise<Product | null> {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) {
      return null;
    }
    const data: Product = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  if (!product) {
    return (
      <div className="container mx-auto flex h-[80vh] items-center justify-center">
        <p className="text-2xl text-muted-foreground">Product not found.</p>
      </div>
    );
  }

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`h-5 w-5 ${i <= Math.round(rating) ? 'fill-primary text-primary' : 'text-gray-300'}`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="rounded-lg">
          <Image
            src={product.images[0]}
            alt={product.title}
            width={600}
            height={600}
            className="aspect-square w-full rounded-lg object-cover shadow-lg"
            data-ai-hint="cosmetics product lifestyle"
          />
        </div>

        <div className="flex flex-col space-y-4">
          <Badge variant="secondary" className="w-fit">{product.category}</Badge>
          <h1 className="text-4xl font-bold tracking-tight">{product.title}</h1>
          
          <div className="flex items-center space-x-2">
            <div className="flex items-center">{renderStars(product.rating)}</div>
            <span className="text-sm text-muted-foreground">({product.rating.toFixed(1)} from {product.reviews.length} reviews)</span>
          </div>

          <p className="text-lg text-muted-foreground">{product.description}</p>
          
          <p className="text-4xl font-extrabold text-primary">${product.price.toFixed(2)}</p>

          <Button size="lg" className="w-full">Add to Bag</Button>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="highlights">
              <AccordionTrigger>Product Highlights</AccordionTrigger>
              <AccordionContent className="space-y-4 text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <Truck className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>{product.shippingInformation}</span>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>{product.warrantyInformation}</span>
                </div>
                 <div className="flex items-start gap-3">
                  <Undo2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>{product.returnPolicy}</span>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <Separator className="my-12" />

      <div>
        <h2 className="mb-6 text-3xl font-bold">Reviews & Ratings</h2>
        <div className="space-y-6">
          {product.reviews.map((review, index) => (
            <div key={index} className="flex space-x-4">
              <Avatar>
                <AvatarImage src={`https://i.pravatar.cc/150?u=${review.reviewerEmail}`} />
                <AvatarFallback>{review.reviewerName.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-semibold">{review.reviewerName}</p>
                  <div className="flex items-center">{renderStars(review.rating)}</div>
                </div>
                <p className="text-sm text-muted-foreground">{review.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
