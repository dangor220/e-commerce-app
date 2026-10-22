import { createContext } from 'react';
import type { Product } from './schemas';

export interface ProductContextValue {
  products: Product[];
  isLoading: boolean;
  error: string | null;
}

export const ProductContext = createContext<ProductContextValue | null>(null);
