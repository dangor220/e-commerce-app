import { createContext } from 'react';
import type { User } from './types';
import type { LogInData } from './schemas';

export interface AuthContextValue {
  user: User | null;
  logIn: (data: LogInData) => Promise<void>;
  logOut: () => void;
  isLoading: boolean;
  emailVerification: boolean;
  showVerifyEmail: () => void;
  hideVerifyEmail: () => void;
}

export const AuthContext = createContext<AuthContextValue | null>(null);
