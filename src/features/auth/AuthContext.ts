import { createContext } from 'react';
import type { User } from './types';
import type { LogInData } from './schemas';

export interface AuthContextValue {
  user: User | null;
  logIn: (data: LogInData) => Promise<void>;
  logOut: () => void;
}

export const AuthContext = createContext<AuthContextValue | null>(null);
