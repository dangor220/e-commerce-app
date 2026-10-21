import { RouterProvider } from 'react-router';
import { router } from './router';
import AuthProvider from '@/features/auth/AuthProvider';
import ProductProvider from '@/features/products/ProductProvider';

export default function App() {
  return (
    <ProductProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ProductProvider>
  );
}
