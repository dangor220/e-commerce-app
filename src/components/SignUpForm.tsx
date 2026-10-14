import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const signUpSchema = z.object({
  email: z.email('Введите корректный email'),
  password: z.string().min(8, 'Минимум 8 символов'),
});

type SignUpData = z.infer<typeof signUpSchema>;

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpData>({ resolver: zodResolver(signUpSchema) });

  const onSubmit = (data: SignUpData) => {
    alert(data.email + ' ' + data.password);
  };

  return (
    <div style={{ maxWidth: 500, margin: '2rem auto' }}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div style={{ marginBottom: '1rem' }}>
          <label>
            Email:
            <input
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              {...register('email')}
            />
          </label>
          {errors.email && <p role="alert">{errors.email.message}</p>}
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>
            Password:
            <input
              type="password"
              autoComplete="new-password"
              placeholder="********"
              {...register('password')}
            />
          </label>
          {errors.password && <p role="alert">{errors.password.message}</p>}
        </div>
        <button type="submit" disabled={isSubmitting}>
          Create account
        </button>
      </form>
    </div>
  );
}
