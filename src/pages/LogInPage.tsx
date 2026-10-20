import LogInForm from '@/features/auth/LogInForm';
import { Link } from 'react-router';

export default function LogInPage() {
  return (
    <div className="mx-auto items-center flex flex-col gap-2">
      <h1 className="text-2xl">Log In</h1>
      <LogInForm />
      <p className="italic">
        Don't have an account?{' '}
        <Link className="text-indigo-600" to="/signup">
          SignUp
        </Link>
      </p>
    </div>
  );
}
