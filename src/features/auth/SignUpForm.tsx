import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema, type SignUpData } from './schemas';
import { EmailTakenError, signUp } from './api';
import { useNavigate } from 'react-router';
import Button from '@/shared/ui/Button';

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
    <form className="flex flex-col gap-4 items-center" onSubmit={handleSubmit(onSubmit)} noValidate>
      <label className="flex gap-2">
        First name:
        <input type="text" placeholder="John" {...register('firstName')} />
      </label>
      {errors.firstName && (
        <p className="text-red-500" role="alert">
          {errors.firstName.message}
        </p>
      )}
      <label className="flex gap-2">
        Last name:
        <input type="text" placeholder="Smith" {...register('lastName')} />
      </label>
      {errors.lastName && (
        <p className="text-red-500" role="alert">
          {errors.lastName.message}
        </p>
      )}
      <label className="flex gap-2">
        Email:
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
        Password:
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
        {isSubmitting ? 'Creating...' : 'Create account'}
      </Button>
    </form>
  );
}
