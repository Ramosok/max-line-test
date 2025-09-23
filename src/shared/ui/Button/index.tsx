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
          className,
          'rounded-md bg-green p-[11px] text-[13px] font-medium uppercase text-white hover:bg-green-light active:bg-green-muted',
        )}
        {...props}
        disabled={disabled}>
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
