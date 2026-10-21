import ProductCard from './ProductCard';
import useProducts from './useProducts';

export default function ProductList() {
  const { isLoading, error, products } = useProducts();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p role="alert">{error}</p>;
  if (products.length === 0) return <p>There are no products yet</p>;

  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
