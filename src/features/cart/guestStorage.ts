import { cartLineSchema, type CartLine } from './schemas';

const KEY = 'cartly:guest-cart';

export function loadGuestCart(): CartLine[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];

    const parsed = cartLineSchema.array().safeParse(JSON.parse(raw));
    return parsed.success ? parsed.data : [];
  } catch {
    return [];
  }
}

export function saveGuestCart(lines: CartLine[]): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(lines));
  } catch (error: unknown) {
    throw new Error("Can't save cart", { cause: error });
  }
}

export function clearGuestCart(): void {
  try {
    localStorage.removeItem(KEY);
  } catch (error: unknown) {
    throw new Error("Can't clear cart", { cause: error });
  }
}
