import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { logInSchema, type LogInData } from './schemas';
import { useNavigate } from 'react-router';
import { InvalidCredentialsError } from './api';
import Button from '@/shared/ui/Button';
import { useAuth } from './useAuth';

export default function LogInForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LogInData>({ resolver: zodResolver(logInSchema) });
  const { logIn } = useAuth();

  const onSubmit = async (data: LogInData) => {
    try {
      await logIn(data);
      await navigate('/');
    } catch (error) {
      setError('root', {
        message:
          error instanceof InvalidCredentialsError
            ? error.message
            : 'Something went wrong, please try again later.',
      });
    }
  };

  return (
    <form className="flex flex-col gap-4 items-center" onSubmit={handleSubmit(onSubmit)} noValidate>
      <label className="flex gap-2">
        <span>Email:</span>
        <input
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          {...register('email')}
        />
      </label>
      {errors.email && (
        <p className="text-red-500" role="alert">
          {errors.email.message}
        </p>
      )}
      <label className="flex gap-2">
        <span>Password:</span>
        <input
          type="password"
          autoComplete="new-password"
          placeholder="********"
          {...register('password')}
        />
      </label>
      {errors.password && (
        <p className="text-red-500" role="alert">
          {errors.password.message}
        </p>
      )}
      {errors.root && (
        <p className="text-red-500" role="alert">
          {errors.root.message}
        </p>
      )}

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Logging in...' : 'Log in'}
      </Button>
    </form>
  );
}
