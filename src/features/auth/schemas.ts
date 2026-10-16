import z from 'zod';

export const signUpSchema = z.object({
  email: z.email('Введите корректный email'),
  password: z.string().min(8, 'Минимум 8 символов'),
  firstName: z.string(),
  lastName: z.string(),
});
export const userMetadataSchema = signUpSchema.pick({ firstName: true, lastName: true });

export const logInSchema = z.object({
  email: z.email('Введите корректный email'),
  password: z.string().min(1, 'Введите пароль'),
});

export type SignUpData = z.infer<typeof signUpSchema>;
export type LogInData = z.infer<typeof logInSchema>;
