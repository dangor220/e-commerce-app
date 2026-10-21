import { Outlet } from 'react-router';
import Header from './Header';

export default function RootLayout() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-5">
        <Outlet />
      </main>
    </>
  );
}
