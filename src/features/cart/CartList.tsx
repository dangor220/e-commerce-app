import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { useAuth } from '@/features/auth/useAuth';
import { getProductsByIds } from '@/features/products/api';
import type { Product } from '@/features/products/schemas';
import { buttonStyles } from '@/shared/ui/Button/button-styles';
import useCart from './useCart';

const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

type Loaded = { key: string; products: Product[] | null };

export default function CartList() {
  const { user } = useAuth();
  const { lines, isLoading, error } = useCart();
  const [loaded, setLoaded] = useState<Loaded | null>(null);

  const idsKey = lines
    .map((line) => line.productId)
    .sort((a, b) => a - b)
    .join(',');

  useEffect(() => {
    if (idsKey === '') return;
    const ids = idsKey.split(',').map(Number);
    let ignore = false;

    async function load() {
      try {
        const products = await getProductsByIds(ids);
        if (!ignore) setLoaded({ key: idsKey, products });
      } catch (e) {
        console.error(e);
        if (!ignore) setLoaded({ key: idsKey, products: null });
      }
    }

    void load();

    return () => {
      ignore = true;
    };
  }, [idsKey]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p role="alert">{error}</p>;

  if (lines.length === 0) {
    return (
      <div className="flex flex-col items-start gap-4">
        <p className="text-gray-600">Your cart is empty.</p>
        <Link to="/" className={buttonStyles()}>
          Browse products
        </Link>
      </div>
    );
  }

  if (loaded?.key !== idsKey) return <p>Loading...</p>;
  if (loaded.products === null) return <p role="alert">Failed to load cart items</p>;

  const byId = new Map(loaded.products.map((product) => [product.id, product]));

  const items = lines.flatMap((line) => {
    const product = byId.get(line.productId);
    return product ? [{ product, quantity: line.quantity }] : [];
  });

  const total = items.reduce((sum, { product, quantity }) => sum + product.price * quantity, 0);

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_20rem]">
      <ul className="divide-y divide-gray-200 rounded-lg border border-gray-200">
        {items.map(({ product, quantity }) => (
          <li key={product.id} className="flex gap-4 p-4">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="size-24 shrink-0 rounded object-cover"
              />
            ) : (
              <div className="size-24 shrink-0 rounded bg-gray-100" />
            )}

            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <h2 className="font-medium text-gray-900">{product.name}</h2>
              <p className="text-sm text-gray-600">
                {priceFormatter.format(product.price)} × {quantity}
              </p>
            </div>

            <p className="font-semibold">{priceFormatter.format(product.price * quantity)}</p>
          </li>
        ))}
      </ul>

      <aside className="h-fit rounded-lg border border-gray-200 p-4">
        <h2 className="mb-4 text-lg font-semibold">Summary</h2>
        <div className="mb-4 flex justify-between">
          <span>Total</span>
          <span className="font-semibold">{priceFormatter.format(total)}</span>
        </div>

        {user ? (
          <button type="button" className={`${buttonStyles()} w-full`}>
            Checkout
          </button>
        ) : (
          <Link to="/login" className={`${buttonStyles()} block text-center`}>
            Log in to checkout
          </Link>
        )}
      </aside>
    </div>
  );
}
