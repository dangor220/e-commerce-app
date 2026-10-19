import z from 'zod';

export const signUpSchema = z.object({
  email: z.email('Enter a valid email address.'),
  password: z.string().min(8, 'Minimum of 8 characters'),
  firstName: z.string().trim().min(1, 'Enter the name'),
  lastName: z.string().trim(),
});
export const userMetadataSchema = signUpSchema.pick({ firstName: true, lastName: true });

export const logInSchema = z.object({
  email: z.email('Enter a valid email address.'),
  password: z.string().min(1, 'Enter the password'),
});

export type SignUpData = z.infer<typeof signUpSchema>;
export type LogInData = z.infer<typeof logInSchema>;
