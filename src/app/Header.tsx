import UserMenu from '@/features/auth/UserMenu';
import useCart from '@/features/cart/useCart';
import Logo from '@/shared/ui/Logo';
import { NavLink } from 'react-router';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors',
    isActive
      ? 'bg-indigo-50 text-indigo-700'
      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900',
  ].join(' ');

export default function Header() {
  const { count } = useCart();
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
          <NavLink className={navLinkClass} to="/products">
            Products
          </NavLink>
          <NavLink className={navLinkClass} to="/cart">
            Cart
            {count > 0 && (
              <>
                <span
                  aria-hidden="true"
                  className="flex h-5 min-w-5 items-center justify-center rounded-full bg-indigo-600 px-1.5 text-xs font-semibold tabular-nums text-white">
                  {count > 99 ? '99+' : count}
                </span>
                <span className="sr-only">items in cart</span>
              </>
            )}
          </NavLink>
        </nav>
        <div className="justify-self-end">
          <UserMenu />
        </div>
      </div>
    </header>
  );
}
