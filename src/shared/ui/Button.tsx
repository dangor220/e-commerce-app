import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type Variant = 'primary' | 'secondary' | 'ghost-destructive';

type ButtonProps = {
  variant?: Variant;
} & ComponentProps<'button'>;

export default function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge(
        'text-white transition-colors rounded px-2 py-1 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed',
        getVariantStyles(variant),
        className,
      )}
      {...props}
    />
  );
}

function getVariantStyles(variant: Variant) {
  switch (variant) {
    case 'primary':
      return 'bg-cyan-600 hover:bg-cyan-500';
    case 'secondary':
      return 'bg-zinc-700 hover:bg-zinc-600 text-zinc-400';
    case 'ghost-destructive':
      return 'hover:bg-red-800 text-red-800 hover:text-red-200';
    default:
      throw new Error(`Invalid variant: ${variant satisfies never}`);
  }
}
