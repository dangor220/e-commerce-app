import Button from '@/shared/ui/Button/Button';
import useCart from './useCart';
import { useState } from 'react';

type QuantityControlsProps = {
  productId: number;
  quantity: number;
};

export default function QuantityControls({ productId, quantity }: QuantityControlsProps) {
  const { setQuantity, removeItem } = useCart();
  const [isPending, setIsPending] = useState(false);

  const run = async (action: () => Promise<void>) => {
    setIsPending(true);
    try {
      await action();
    } catch (e) {
      console.error(e);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="secondary"
        disabled={isPending || quantity <= 1}
        onClick={() => void run(() => setQuantity(productId, quantity - 1))}>
        -
      </Button>
      <span className="w-6 text-center" aria-live="polite">
        {quantity}
      </span>
      <Button
        aria-label="Increase quantity"
        disabled={isPending}
        onClick={() => void run(() => setQuantity(productId, quantity + 1))}>
        +
      </Button>
      <Button
        variant="ghost-destructive"
        aria-label="Remove from cart"
        disabled={isPending}
        onClick={() => void run(() => removeItem(productId))}>
        Remove
      </Button>
    </div>
  );
}
