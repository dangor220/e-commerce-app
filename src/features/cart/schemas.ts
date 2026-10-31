import { z } from 'zod';

export const cartLineSchema = z.object({
  productId: z.number().int().positive(),
  quantity: z.number().int().positive(),
});

export type CartLine = z.infer<typeof cartLineSchema>;
