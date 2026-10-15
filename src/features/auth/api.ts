import type { SignUpData } from './schemas';
export class EmailTakenError extends Error {}

export async function signUp(data: SignUpData): Promise<void> {
  // const response = await fetch('api/signup', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data),
  // });

  // if (!response.ok) {
  //   throw new Error('Failed signup');
  // }
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (data.email === 'dan.gor220@yandex.ru') {
    throw new EmailTakenError('This email already exist');
  }
}
