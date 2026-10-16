import { useAuth } from '@/features/auth/useAuth';
import Button from '@/shared/ui/Button';
import { NavLink, Outlet } from 'react-router';

function UserMenu() {
  const { user, logOut, isLoading } = useAuth();

  if (isLoading) return null;

  if (!user)
    return (
      <NavLink to="/login">
        <Button>Log In</Button>
      </NavLink>
    );

  return (
    <div className="flex gap-2 items-center">
      <div className="flex flex-col items-start">
        <span>
          {user.firstName} {user.lastName}
        </span>
        <span className="text-sm italic">{user.email}</span>
      </div>
      <Button onClick={logOut}>Log Out</Button>
    </div>
  );
}

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
