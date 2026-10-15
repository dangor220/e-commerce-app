import { Link } from 'react-router';

export default function LogInPage() {
  return (
    <>
      <h1>LogIn</h1>
      <p>
        Don't have an account? <Link to="/signup">SignUp</Link>
      </p>
    </>
  );
}
