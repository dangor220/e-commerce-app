import z from 'zod';

export const productSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  image: z.string().nullable(),
  description: z.string().nullable(),
});

export type Product = z.infer<typeof productSchema>;
