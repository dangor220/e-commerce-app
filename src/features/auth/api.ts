import type { LogInData, SignUpData } from './schemas';
import type { User } from './types';

export class EmailTakenError extends Error {}
export class InvalidCredentialsError extends Error {}

const users: SignUpData[] = [];

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function signUp(data: SignUpData): Promise<void> {
  await delay(1000);

  if (users.some((user) => user.email === data.email)) {
    throw new EmailTakenError('This email already exist');
  }

  users.push(data);
}

export async function logIn(data: LogInData): Promise<User> {
  await delay(1000);

  const user = users.find((u) => u.email === data.email);

  if (user?.password !== data.password) {
    throw new InvalidCredentialsError('Invalid email or password');
  }

  return { email: user.email, firstName: user.firstName, lastName: user.lastName };
}
