<a id="readme-top"></a>

[![README RU](https://img.shields.io/badge/readme_ru-white?style=for-the-badge&logo=ru)](https://github.com/dangor220/cartly/blob/main/README.md)
<br />

<!-- PROJECT LOGO -->
<div align="center">

  <a href="https://github.com/dangor220/cartly/tree/main/src">
    <img src="assets/readme/logo.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Cartly: an online store with a product catalog, authentication, and shopping carts for guests and registered users</h3>

  <p align="center">An educational web application that allows users to browse products, add items to the cart without registration, and sync their guest cart with their account after signing in.
    <br />
    <br />
    <a href="https://github.com/dangor220/cartly/tree/main/src">View source code</a>
    <br />
    <br />
    <a href="#">Live demo</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About the Project</a>
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#tech-stack">Tech Stack</a></li>
        <li><a href="#project-structure">Project Structure</a></li>
      </ul>
    </li>
    <li><a href="#installation-and-setup">Installation and Setup</a></li>
    <li><a href="#resources">Resources</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About the Project

[![Product Name Screen Shot][product-screenshot]](https://github.com/dangor220/cartly)

Cartly is a single-page e-commerce application built with React, TypeScript, and Vite. Product, user, and cart data are stored in Supabase (PostgreSQL). Users can browse the product catalog, preview products in a modal window or open their dedicated product pages, and add items to their shopping cart.

Guests can add products to their cart without creating an account, with cart data stored in `localStorage`. After signing in, guest cart items are transferred to the database and associated with the user's account, making the cart accessible across devices. The header displays the number of items in the cart, while the cart page allows users to update quantities, remove items, and view the total price.

[![Product Name Screen Shot 2][product-screenshot-2]](https://github.com/dangor220/cartly)

<p align="right">(<a href="#readme-top">Back to Top</a>)</p>

### Features

- User registration, sign-in, and sign-out using Supabase Auth
- Session persistence across page reloads
- Form validation with React Hook Form and Zod
- Product catalog with featured products on the homepage and a dedicated catalog page
- Quick product preview in a modal window and dedicated product detail pages
- Guest shopping cart powered by `localStorage`
- Shopping cart for authenticated users stored in the database
- Automatic transfer of guest cart items to the user's account after sign-in
- Updating product quantities and removing items from the cart
- Shopping cart item counter in the header
- Database-level access control: users can only access their own cart items

<p align="right">(<a href="#readme-top">Back to Top</a>)</p>

### Tech Stack

[![react][react.js]][react-url]
[![typescript][typescript.ts]][typescript-url]
[![vite][vite.js]][vite-url]
[![tailwindcss][tailwind.css]][tailwind-url]
[![react router][router.rr]][router-url]
[![supabase][supabase.sb]][supabase-url]
[![zod][zod.zd]][zod-url]

<p align="right">(<a href="#readme-top">Back to Top</a>)</p>

### Project Structure

```text
src/
├── app/        # Application setup: providers, router, layout, header
├── pages/      # Route-based pages
├── features/   # Domain-specific logic: auth, products, cart
└── shared/     # Reusable components and utilities
```

Dependencies follow a unidirectional architecture: `app → pages → features → shared`.

<p align="right">(<a href="#readme-top">Back to Top</a>)</p>

## Installation and Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/dangor220/cartly.git
   ```

2. Navigate to the project directory and install dependencies:

   ```sh
   cd cartly
   npm install
   ```

3. Create a `.env.local` file in the project root and provide your Supabase project credentials:

   ```sh
   VITE_SUPABASE_URL=
   VITE_SUPABASE_PUBLISHABLE_KEY=
   ```

   Use only the public (publishable) key. Never expose secret keys in client-side code.

4. Create the `products` and `cart_items` tables in Supabase and configure the appropriate access policies.

5. Start the development server:

   ```sh
   npm run dev
   ```

6. Open [http://localhost:5173](http://localhost:5173) in your browser.

To create a production build, run:

```sh
npm run build
```

<p align="right">(<a href="#readme-top">Back to Top</a>)</p>

## Resources

- [Source Code](https://github.com/dangor220/cartly/tree/main/src)
- [Project Repository](https://github.com/dangor220/cartly)

<p align="right">(<a href="#readme-top">Back to Top</a>)</p>

<!-- CONTACT -->

## Contact

- Danil Gordeev — [@dangor220](https://t.me/dangor220)
- Email — [dan.gor220@yandex.ru](mailto:dan.gor220@yandex.ru)

- Project Link: [https://github.com/dangor220/cartly](https://github.com/dangor220/cartly)

<p align="right">(<a href="#readme-top">Back to Top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[product-screenshot]: assets/readme/product.png
[product-screenshot-2]: assets/readme/product-2.png
[react.js]: https://img.shields.io/badge/react-20232A?style=for-the-badge&logo=react
[react-url]: https://react.dev/
[typescript.ts]: https://img.shields.io/badge/typescript-20232A?style=for-the-badge&logo=typescript
[typescript-url]: https://www.typescriptlang.org/
[vite.js]: https://img.shields.io/badge/vite-20232A?style=for-the-badge&logo=vite
[vite-url]: https://vite.dev/
[tailwind.css]: https://img.shields.io/badge/tailwindcss-20232A?style=for-the-badge&logo=tailwindcss
[tailwind-url]: https://tailwindcss.com/
[router.rr]: https://img.shields.io/badge/react_router-20232A?style=for-the-badge&logo=reactrouter
[router-url]: https://reactrouter.com/
[supabase.sb]: https://img.shields.io/badge/supabase-20232A?style=for-the-badge&logo=supabase
[supabase-url]: https://supabase.com/
[zod.zd]: https://img.shields.io/badge/zod-20232A?style=for-the-badge&logo=zod
[zod-url]: https://zod.dev/
