import { supabase } from '@/shared/lib/supabase';
import { productSchema, type Product } from './schemas';

export async function getProducts(limit?: number): Promise<Product[]> {
  let query = supabase.from('products').select('id, name, price, image, description').order('id');

  if (limit !== undefined) {
    query = query.limit(limit);
  }

  const { data, error } = await query;

  if (error) {
    throw new Error(error.message);
  }

  return productSchema.array().parse(data);
}
