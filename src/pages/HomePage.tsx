import ProductList from '@/features/products/ProductList';
import { buttonStyles } from '@/shared/ui/Button/button-styles';
import { Link } from 'react-router';

export default function HomePage() {
  return (
    <div>
      <div className="flex flex-col gap-3 mx-auto items-center justify-center py-15">
        <h1 className="text-5xl font-semibold">Welcome to Carty</h1>
        <p className="text-xl text-gray-600">Discover products at great prices</p>
      </div>

      <section className="pb-12" aria-labelledby="featured-heading">
        <h2 className="mb-12 text-2xl font-semibold text-center" id="featured-heading">
          Featured products
        </h2>
        <ProductList limit={6} />
        <div className="mt-10 flex justify-center">
          <Link to="/products" className={buttonStyles()}>
            Show more
          </Link>
        </div>
      </section>
    </div>
  );
}
