import { useEffect, useState, type ReactNode } from 'react';
import { logIn as logInRequest, logOut as logOutRequest, subscribeToAuth } from './api';
import { AuthContext } from './AuthContext';
import type { User } from './types';
import type { LogInData } from './schemas';

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [emailVerification, setEmailVerification] = useState(false);

  useEffect(() => {
    return subscribeToAuth((nextUser) => {
      setUser(nextUser);
      setIsLoading(false);
    });
  }, []);

  const logIn = async (data: LogInData) => {
    setUser(await logInRequest(data));
  };

  const logOut = async () => {
    await logOutRequest();
  };

  const showVerifyEmail = () => setEmailVerification(true);
  const hideVerifyEmail = () => setEmailVerification(false);

  return (
    <AuthContext
      value={{
        user,
        isLoading,
        logIn,
        logOut,
        emailVerification,
        showVerifyEmail,
        hideVerifyEmail,
      }}>
      {children}
    </AuthContext>
  );
}
