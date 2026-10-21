import LogInForm from '@/features/auth/LogInForm';
import { Link } from 'react-router';

export default function LogInPage() {
  return (
    <div className="flex min-h-[calc(100dvh-4rem)] items-center justify-center">
      <div className="flex flex-col gap-2 mx-auto w-full max-w-sm items-center">
        <h1 className="text-2xl font-semibold">Log In</h1>
        <LogInForm />
        <p className="italic text-sm">
          Don't have an account?{' '}
          <Link className="text-indigo-600" to="/signup">
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
}
