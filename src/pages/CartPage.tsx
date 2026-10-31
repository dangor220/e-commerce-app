import CartList from '@/features/cart/CartList';

export default function CartPage() {
  return (
    <div className="w-full py-8">
      <h1 className="mb-6 text-3xl font-semibold">Your cart</h1>
      <CartList />
    </div>
  );
}
