import UserMenu from '@/features/auth/UserMenu';
import { NavLink, Outlet } from 'react-router';

export default function RootLayout() {
  return (
    <>
      <nav className="flex justify-between items-center my-5 mx-5">
        <NavLink to="/">Home</NavLink>
        <UserMenu />
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
