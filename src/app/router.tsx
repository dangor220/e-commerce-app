import HomePage from '@/pages/HomePage';
import LogInPage from '@/pages/LogInPage';
import NotFoundPage from '@/pages/NotFoundPage';
import SignUpPage from '@/pages/SignUpPage';

import { createBrowserRouter } from 'react-router';
import RootLayout from './RootLayout';
import CartPage from '@/pages/CartPage';
import ProductDetailPage from '@/pages/ProductDetailPage';
import ProductsPage from '@/pages/ProductsPage';

export const router = createBrowserRouter(
  [
    {
      Component: RootLayout,
      children: [
        { index: true, Component: HomePage },
        {
          path: 'login',
          Component: LogInPage,
        },
        {
          path: 'cart',
          Component: CartPage,
        },
        {
          path: 'signup',
          Component: SignUpPage,
        },
        {
          path: 'products',
          Component: ProductsPage,
        },
        {
          path: 'products/:id',
          Component: ProductDetailPage,
        },
        {
          path: '*',
          Component: NotFoundPage,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL.replace(/\/$/, ''),
  },
);
