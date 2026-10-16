import { useState, type ReactNode } from 'react';
import type { User } from './types';
import type { LogInData } from './schemas';
import { logIn as logInRequest } from './api';
import { AuthContext } from './AuthContext';

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const logIn = async (data: LogInData) => {
    setUser(await logInRequest(data));
  };
  const logOut = () => setUser(null);

  return <AuthContext value={{ user, logIn, logOut }}>{children}</AuthContext>;
}
