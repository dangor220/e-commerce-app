import SignUpForm from '@/features/auth/SignUpForm';
import { Link } from 'react-router';

export default function SignUpPage() {
  return (
    <div className="flex min-h-[calc(100dvh-4rem)] items-center justify-center">
      <div className="flex flex-col gap-2 mx-auto w-full max-w-sm items-center">
        <h1 className="text-2xl font-semibold">Sign Up</h1>
        <SignUpForm />
        <p className="italic text-sm">
          Already have an account?{' '}
          <Link className="text-indigo-600" to="/login">
            LogIn
          </Link>
        </p>
      </div>
    </div>
  );
}
