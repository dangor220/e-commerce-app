import Button from '@/shared/ui/Button/Button';
import useCart from './useCart';
import { useState } from 'react';

type AddToCartButtonProps = {
  productId: number;
  className?: string;
};

export default function AddToCartButton({ productId, className }: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleClick = async () => {
    setIsAdding(true);
    try {
      await addItem(productId);
    } catch (e) {
      console.error(e);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <Button onClick={handleClick} disabled={isAdding} className={className}>
      {isAdding ? 'Adding...' : 'Add to cart'}
    </Button>
  );
}
