import SignUpForm from '@/features/auth/SignUpForm';
import { Link } from 'react-router';

export default function SignUpPage() {
  return (
    <div className="mx-auto items-center flex flex-col gap-2">
      <h1 className="text-2xl">Sign Up</h1>
      <SignUpForm />
      <p className="italic">
        Already have an account?{' '}
        <Link className="text-indigo-600" to="/login">
          LogIn
        </Link>
      </p>
    </div>
  );
}
