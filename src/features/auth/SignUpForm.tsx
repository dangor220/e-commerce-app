import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema, type SignUpData } from './schemas';
import { EmailTakenError, signUp } from './api';
import { useNavigate } from 'react-router';
import Button from '@/shared/ui/Button/Button';
import { useAuth } from './useAuth';

export default function SignUpForm() {
  const navigate = useNavigate();
  const { showVerifyEmail } = useAuth();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<SignUpData>({ resolver: zodResolver(signUpSchema) });

  const onSubmit = async (data: SignUpData) => {
    try {
      await signUp(data);
      showVerifyEmail();
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
    <form className="flex flex-col gap-4 items-start" onSubmit={handleSubmit(onSubmit)} noValidate>
      <label className="flex gap-2 items-center">
        First name:
        <input className="px-1 py-1" type="text" placeholder="John" {...register('firstName')} />
      </label>
      {errors.firstName && (
        <p className="italic text-red-500 text-sm" role="alert">
          {errors.firstName.message}
        </p>
      )}
      <label className="flex gap-2 items-center">
        Last name:
        <input className="px-1 py-1" type="text" placeholder="Smith" {...register('lastName')} />
      </label>
      {errors.lastName && (
        <p className="italic text-red-500 text-sm" role="alert">
          {errors.lastName.message}
        </p>
      )}
      <label className="flex gap-2 items-center">
        Email:
        <input
          className="px-1 py-1"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          {...register('email')}
        />
      </label>
      {errors.email && (
        <p className="italic text-red-500 text-sm" role="alert">
          {errors.email.message}
        </p>
      )}

      <label className="flex gap-2 items-center">
        Password:
        <input
          className="px-1 py-1"
          type="password"
          autoComplete="new-password"
          placeholder="********"
          {...register('password')}
        />
      </label>
      {errors.password && (
        <p className="italic text-red-500 text-sm" role="alert">
          {errors.password.message}
        </p>
      )}

      {errors.root && (
        <p className="italic text-red-500 text-sm" role="alert">
          {errors.root.message}
        </p>
      )}

      <Button className="self-center" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Creating...' : 'Create account'}
      </Button>
    </form>
  );
}
