import { useAuth } from '@/features/auth/useAuth';
import Button from '@/shared/ui/Button';
import { NavLink, Outlet } from 'react-router/internal/react-server-client';

export default function RootLayout() {
  const { user, logOut } = useAuth();
  return (
    <>
      <nav className="flex justify-between items-center my-5 mx-5">
        <NavLink to="/">Home</NavLink>
        {user ? (
          <>
            <div className="flex gap-2 items-center">
              <div className="flex flex-col items-start">
                <span>
                  {user.firstName} {user.lastName}
                </span>
                <span className="text-sm italic">{user.email}</span>
              </div>

              <Button onClick={logOut}>Log Out</Button>
            </div>
          </>
        ) : (
          <NavLink to="/login">Log in</NavLink>
        )}
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
