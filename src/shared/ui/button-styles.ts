import { twMerge } from 'tailwind-merge';

export type Variant = 'primary' | 'secondary' | 'ghost-destructive';

export function buttonStyles(variant: Variant = 'primary') {
  return twMerge(
    'rounded text-white px-2 py-1 transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed',
    getVariantStyles(variant),
  );
}

function getVariantStyles(variant: Variant) {
  switch (variant) {
    case 'primary':
      return 'bg-indigo-600 hover:bg-indigo-500';
    case 'secondary':
      return 'bg-zinc-700 hover:bg-zinc-600 text-zinc-400';
    case 'ghost-destructive':
      return 'hover:bg-red-800 text-red-800 hover:text-red-200';
    default:
      throw new Error(`Invalid variant: ${variant satisfies never}`);
  }
}
