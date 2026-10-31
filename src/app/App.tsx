import { RouterProvider } from 'react-router';
import { router } from './router';
import AuthProvider from '@/features/auth/AuthProvider';
import ProductProvider from '@/features/products/ProductProvider';
import CartProvider from '@/features/cart/CartProvider';

export default function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
}
