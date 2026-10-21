import Button from '@/shared/ui/Button/Button';
import type { Product } from './schemas';
import { useState } from 'react';

type ProductCardProps = {
  product: Product;
};

const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default function ProductCard({ product }: ProductCardProps) {
  const { name, price, description, image } = product;
  const { isPreview, setIsPreview } = useState(false);

  const handleAddProduct = () => {};

  return (
    <article>
      {image ? (
        <img
          className="aspect-[3/2] w-full object-cover rounded-sm"
          src={image}
          alt={name}
          loading="lazy"
        />
      ) : (
        <div className="aspect-[3/2] w-full bg-gray-100" />
      )}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-medium text-gray-900">{name}</h3>
        {description && <p className="line-clamp-2 text-sm text-gray-600">{description}</p>}
        <div className="flex justify-between items-center">
          <p className="mt-auto text-lg font-semibold">{priceFormatter.format(price)}</p>
          <div className="flex gap-1">
            <Button onClick={() => setIsPreview(!isPreview)} variant="secondary">
              Learn more
            </Button>
            <Button onClick={handleAddProduct}>Add to cart</Button>
          </div>
        </div>
      </div>
    </article>
  );
}
