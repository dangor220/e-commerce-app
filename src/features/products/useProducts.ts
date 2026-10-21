import { use } from 'react';
import { ProductContext } from './ProductContext';

export default function useProducts() {
  const context = use(ProductContext);

  if (!context) {
    throw new Error('useProducts must be used within ProductProvider');
  }

  return context;
}
