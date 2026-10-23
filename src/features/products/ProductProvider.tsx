import { useEffect, useState, type ReactNode } from 'react';
import { ProductContext } from './ProductContext';
import type { Product } from './schemas';
import { getProducts } from './api';

export default function ProductProvider({ children }: { children: ReactNode }) {
  const [limit, setLimit] = useState<number | undefined>();
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        const data = await getProducts(limit);
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
  }, [limit]);

  const setProductLimit = (value: number | undefined) => {
    setLimit(value);
  };

  return (
    <ProductContext value={{ products, isLoading, error, setProductLimit }}>
      {children}
    </ProductContext>
  );
}
