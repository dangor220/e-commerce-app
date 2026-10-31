import { z } from 'zod';
import { supabase } from '@/shared/lib/supabase';
import type { CartLine } from './schemas';

const rowsSchema = z
  .object({ product_id: z.number(), quantity: z.number().int().positive() })
  .transform(({ product_id, quantity }) => ({ productId: product_id, quantity }))
  .array();

export async function getServerCart(): Promise<CartLine[]> {
  const { data, error } = await supabase
    .from('cart_items')
    .select('product_id, quantity')
    .order('id');

  if (error) throw new Error(error.message);
  return rowsSchema.parse(data);
}

export async function addToServerCart(productId: number): Promise<void> {
  const { data: existing, error: readError } = await supabase
    .from('cart_items')
    .select('quantity')
    .eq('product_id', productId)
    .maybeSingle();

  if (readError) throw new Error(readError.message);

  const { error } = await supabase
    .from('cart_items')
    .upsert(
      { product_id: productId, quantity: (existing?.quantity ?? 0) + 1 },
      { onConflict: 'user_id,product_id' },
    );

  if (error) throw new Error(error.message);
}

export async function mergeIntoServerCart(lines: CartLine[]): Promise<void> {
  const { error } = await supabase.from('cart_items').upsert(
    lines.map((l) => ({ product_id: l.productId, quantity: l.quantity })),
    { onConflict: 'user_id,product_id', ignoreDuplicates: true },
  );

  if (error) throw new Error(error.message);
}
