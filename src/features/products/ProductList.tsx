import { useState } from 'react';
import ProductCard from './ProductCard';
import useProducts from './useProducts';
import type { Product } from './schemas';
import Modal from '@/shared/ui/Modal';
import ProductModal from './ProductModal';

export default function ProductList() {
  const { isLoading, error, products } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p role="alert">{error}</p>;
  if (products.length === 0) return <p>There are no products yet</p>;

  return (
    <>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard onPreview={setSelectedProduct} product={product} />
          </li>
        ))}
      </ul>

      <Modal
        open={selectedProduct !== null}
        onClose={() => setSelectedProduct(null)}
        title={selectedProduct?.name ?? ''}>
        {selectedProduct && <ProductModal product={selectedProduct} />}
      </Modal>
    </>
  );
}
