import UserMenu from '@/features/auth/UserMenu';
import Logo from '@/shared/ui/Logo';
import { NavLink } from 'react-router';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'rounded-md px-3 py-2 text-sm font-medium transition-colors',
    isActive
      ? 'bg-indigo-50 text-indigo-700'
      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900',
  ].join(' ');

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto grid h-16 max-w-6xl grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-4 px-5">
        <NavLink className="justify-self-start" to="/" aria-label="Cartly, at home">
          <Logo />
        </NavLink>

        <nav className="flex items-center gap-1" aria-label="Main">
          <NavLink className={navLinkClass} to="/" end>
            Home
          </NavLink>
          <NavLink className={navLinkClass} to="/cart">
            Cart
          </NavLink>
        </nav>
        <div className="justify-self-end">
          <UserMenu />
        </div>
      </div>
    </header>
  );
}
