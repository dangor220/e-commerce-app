import type { Product } from './schemas';

type ProductCardProps = {
  product: Product;
};

const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default function ProductCard({ product }: ProductCardProps) {
  const { name, price, description, image } = product;

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
        <p className="mt-auto pt-2 text-lg font-semibold">{priceFormatter.format(price)}</p>
      </div>
    </article>
  );
}
