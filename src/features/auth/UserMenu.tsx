import { NavLink, useLocation } from 'react-router';
import { useAuth } from './useAuth';
import Button from '@/shared/ui/Button';

const AUTH_PATHS = ['/login', '/signup'];

export default function UserMenu() {
  const { user, logOut, isLoading } = useAuth();
  const { pathname } = useLocation();

  if (isLoading) return null;

  if (!user) {
    if (AUTH_PATHS.includes(pathname)) return null;

    return (
      <NavLink to="/login">
        <Button>Log In</Button>
      </NavLink>
    );
  }

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
