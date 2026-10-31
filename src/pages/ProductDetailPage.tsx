import useProducts from '@/features/products/useProducts';
import Button from '@/shared/ui/Button/Button';
import { buttonStyles } from '@/shared/ui/Button/button-styles';
import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router';

const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default function ProductDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { products } = useProducts();

  const product = products.find((product) => product.id === Number(id));

  useEffect(() => {
    if (!product && products.length > 0) {
      navigate('/', { replace: true });
    }
  }, [product, products.length, navigate]);

  if (!product) {
    return null;
  }

  const { name, price, image, description } = product;

  const handleAddProduct = () => {
    // TODO: добавить товар в корзину
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm">
          <Link to="/" className="text-gray-500 transition hover:text-gray-900">
            Home
          </Link>

          <span className="text-gray-300">/</span>

          <Link to="/products" className="text-gray-500 transition hover:text-gray-900">
            Products
          </Link>

          <span className="text-gray-300">/</span>

          <span className="truncate font-medium text-gray-900">{name}</span>
        </nav>

        <section className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex min-h-80 items-center justify-center bg-gray-100 p-6 sm:p-10 lg:min-h-140">
              {image ? (
                <img
                  src={image}
                  alt={name}
                  className="max-h-130 w-full rounded-xl object-contain transition duration-500 hover:scale-[1.03]"
                />
              ) : (
                <div className="flex aspect-square w-full max-w-md items-center justify-center rounded-2xl bg-gray-200">
                  <span className="text-sm text-gray-500">No image available</span>
                </div>
              )}
            </div>

            <div className="flex flex-col p-6 sm:p-10 lg:p-12">
              <div>
                <span className="inline-flex rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700">
                  Product
                </span>

                <h1 className="mt-5 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
                  {name}
                </h1>

                <div className="mt-6">
                  <p className="text-sm font-medium text-gray-500">Price</p>

                  <p className="mt-1 text-3xl font-bold tracking-tight text-gray-950">
                    {priceFormatter.format(price)}
                  </p>
                </div>
              </div>

              <div className="my-8 h-px bg-gray-200" />

              <div>
                <h2 className="text-lg font-semibold text-gray-900">About this product</h2>

                <p className="mt-3 whitespace-pre-line text-base leading-7 text-gray-600">
                  {description || 'No description available for this product yet.'}
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm text-green-700">
                    ✓
                  </span>

                  <div>
                    <p className="text-sm font-medium text-gray-900">Quality you can trust</p>
                    <p className="mt-1 text-sm text-gray-500">
                      Carefully selected for your everyday needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm text-green-700">
                    ✓
                  </span>

                  <div>
                    <p className="text-sm font-medium text-gray-900">Simple and convenient</p>
                    <p className="mt-1 text-sm text-gray-500">Everything you need in one place.</p>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-10">
                <Button onClick={handleAddProduct}>Add to cart</Button>

                <Link
                  to="/products"
                  className={`${buttonStyles('secondary')} mt-3 flex w-full justify-center`}>
                  Continue shopping
                </Link>

                <p className="mt-4 text-center text-xs text-gray-400">Product ID: {product.id}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
