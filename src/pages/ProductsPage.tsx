import { useAuth } from '@/features/auth/useAuth';

export default function ProductsPage() {
  const { user } = useAuth();
  return <h1>{user ? 'Your products' : 'All products'}</h1>;
}
