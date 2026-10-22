import Button from '@/shared/ui/Button/Button';
import type { Product } from './schemas';

export default function ProductModal({ product }: { product: Product }) {
  const { name, price, description, image } = product;

  return (
    <div className="flex flex-col gap-4">
      {image && <img src={image} alt={name} className="aspect-3/2 w-full rounded object-cover" />}
      <p className="text-gray-600">{description ?? 'No description yet'}</p>
      <div className="flex items-center justify-between">
        <span className="text-xl font-semibold">${price}</span>
        <Button>Add to cart</Button>
      </div>
    </div>
  );
}
