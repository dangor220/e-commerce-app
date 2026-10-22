import { NavLink } from 'react-router';
import { useAuth } from './useAuth';
import Button from '@/shared/ui/Button/Button';
import { buttonStyles } from '@/shared/ui/Button/button-styles';

export default function UserMenu() {
  const { user, logOut, isLoading } = useAuth();

  if (isLoading) return null;

  if (!user) {
    return (
      <NavLink to="/login" className={buttonStyles()}>
        Log In
      </NavLink>
    );
  }

  return (
    <div className="flex gap-3 items-center">
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
