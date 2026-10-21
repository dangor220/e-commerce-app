import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import { buttonStyles, type Variant } from './button-styles';

type ButtonProps = {
  variant?: Variant;
} & ComponentProps<'button'>;

export default function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  return <button type="button" className={twMerge(buttonStyles(variant), className)} {...props} />;
}
