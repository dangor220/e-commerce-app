import z from 'zod';

export const signUpSchema = z.object({
  email: z.email('Введите корректный email'),
  password: z.string().min(8, 'Минимум 8 символов'),
});

export type SignUpData = z.infer<typeof signUpSchema>;
