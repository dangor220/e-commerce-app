import LogInForm from '@/features/auth/LogInForm';
import { Link } from 'react-router';

export default function LogInPage() {
  return (
    <>
      <h1>LogIn</h1>
      <LogInForm />
      <p>
        Don't have an account? <Link to="/signup">SignUp</Link>
      </p>
    </>
  );
}
