import UserMenu from '@/features/auth/UserMenu';
import { NavLink, Outlet } from 'react-router';

export default function RootLayout() {
  return (
    <>
      <header className="flex justify-between items-center px-5 py-5">
        <nav className="flex justify-between items-center gap-2 py-2">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
        </nav>
        <UserMenu />
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}
