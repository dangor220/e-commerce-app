import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { logInSchema, type LogInData } from './schemas';
import { useNavigate } from 'react-router';
import { InvalidCredentialsError } from './api';
import Button from '@/shared/ui/Button/Button';
import { useAuth } from './useAuth';
import Modal from '@/shared/ui/Modal';

export default function LogInForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LogInData>({ resolver: zodResolver(logInSchema) });
  const { logIn, emailVerification, hideVerifyEmail } = useAuth();

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
    <>
      <form
        className="flex flex-col gap-4 items-start"
        onSubmit={handleSubmit(onSubmit)}
        noValidate>
        <label className="flex gap-2 items-center">
          <span>Email:</span>
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
          <span>Password:</span>
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
          {isSubmitting ? 'Logging in...' : 'Log in'}
        </Button>
      </form>

      <Modal open={emailVerification} onClose={hideVerifyEmail} title={'Verify your email'}>
        {emailVerification && (
          <div className="flex flex-col items-center gap-3 py-4 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="h-7 w-7">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5A2.25 2.25 0 0 1 19.5 19.5h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0-8.2 5.2a1.875 1.875 0 0 1-2.01 0l-8.2-5.2"
                />
              </svg>
            </div>

            <h3 className="text-xl font-semibold text-gray-900">Check your email</h3>

            <p className="max-w-sm text-sm leading-6 text-gray-500">
              We've sent you a verification link. Please check your inbox and confirm your account
              to get started.
            </p>
          </div>
        )}
      </Modal>
    </>
  );
}
