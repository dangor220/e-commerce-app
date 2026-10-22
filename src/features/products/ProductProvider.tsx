import { useEffect, useState, type ReactNode } from 'react';
import { ProductContext } from './ProductContext';
import type { Product } from './schemas';
import { getProducts } from './api';

export default function ProductProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        const data = await getProducts(6);
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

  return <ProductContext value={{ products, isLoading, error }}>{children}</ProductContext>;
}
