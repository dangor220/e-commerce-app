import { NavLink, Outlet } from 'react-router/internal/react-server-client';

export default function RootLayout() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Log in</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
