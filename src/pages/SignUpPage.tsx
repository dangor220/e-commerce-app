import SignUpForm from '@/features/auth/SignUpForm';
import { Link } from 'react-router';

export default function SignUpPage() {
  return (
    <>
      <h1>SignUp</h1>
      <SignUpForm />
      <p>
        Already have an account? <Link to="/login">LogIn</Link>
      </p>
    </>
  );
}
