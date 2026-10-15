import SignUpForm from '@/features/auth/SignUpForm';
import { Link } from 'react-router';

export default function SignUpPage() {
  return (
    <>
      <SignUpForm />
      <p>
        Already have an account? <Link to="/login">LogIn</Link>
      </p>
    </>
  );
}
