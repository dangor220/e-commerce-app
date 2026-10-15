import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema, type SignUpData } from './schemas';
import { EmailTakenError, signUp } from './api';
import { useNavigate } from 'react-router';

export default function SignUpForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<SignUpData>({ resolver: zodResolver(signUpSchema) });

  const onSubmit = async (data: SignUpData) => {
    try {
      await signUp(data);
      await navigate('/login');
    } catch (error) {
      if (error instanceof EmailTakenError) {
        setError('email', { message: error.message });
      } else {
        setError('root', {
          message: error instanceof Error ? error.message : 'Something wrong',
        });
      }
    }
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
        {errors.root && <p role="alert">{errors.root.message}</p>}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Creating...' : 'Create account'}
        </button>
      </form>
    </div>
  );
}
