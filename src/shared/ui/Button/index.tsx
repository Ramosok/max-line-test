import { type ButtonHTMLAttributes, forwardRef } from 'react';

import { clsx } from 'clsx';

type Mode = 'primary';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: Mode;
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ mode = 'primary', children, className, disabled, isLoading = false, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          !disabled && 'over:bg-green-light active:bg-green-muted',
          className,
          'h w-full rounded-md bg-green p-3.5 text-sm font-medium uppercase leading-4 text-white disabled:cursor-not-allowed disabled:opacity-50',
        )}
        {...props}
        disabled={disabled}>
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
