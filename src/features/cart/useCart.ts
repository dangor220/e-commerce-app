import { use } from 'react';
import { CartContext } from './CartContext';

export default function useProducts() {
  const context = use(CartContext);

  if (!context) {
    throw new Error('useProducts must be used within CartProvider');
  }

  return context;
}
