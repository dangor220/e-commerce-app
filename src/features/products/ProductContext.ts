import { createContext } from 'react';
import type { Product } from './schemas';

export interface ProductContextValue {
  products: Product[];
  isLoading: boolean;
  isPreview: boolean;
  error: string | null;
  showPreview: () => void;
}

export const ProductContext = createContext<ProductContextValue | null>(null);
