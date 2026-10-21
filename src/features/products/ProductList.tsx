import { useEffect, useState } from 'react';
import { getProducts } from './api';
import type { Product } from './schemas';
import ProductCard from './ProductCard';

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        const data = await getProducts();
        if (!ignore) setProducts(data);
      } catch {
        if (!ignore) setError('Failed to load products');
      } finally {
        if (!ignore) setIsLoading(false);
      }
    }
    load();

    return () => {
      ignore = true;
    };
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p role="alert">{error}</p>;
  if (products.length === 0) return <p>There are no products yet</p>;

  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
