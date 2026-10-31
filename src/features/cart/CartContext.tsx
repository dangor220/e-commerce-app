import { createContext } from 'react';
import type { CartLine } from './schemas';

export interface CartContextValue {
  lines: CartLine[];
  count: number;
  isLoading: boolean;
  error: string | null;
  addItem: (productId: number) => Promise<void>;
}

export const CartContext = createContext<CartContextValue | null>(null);
