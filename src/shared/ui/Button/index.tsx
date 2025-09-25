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
          !disabled && 'hover:bg-green-light active:bg-green-muted',
          className,
          'flex w-full items-center justify-center rounded-md bg-green p-3.5 text-sm font-medium uppercase leading-4 text-white transition-colors disabled:cursor-not-allowed disabled:bg-green-muted',
          isLoading && 'cursor-wait',
        )}
        {...props}
        disabled={disabled || isLoading}>
        {isLoading ? (
          <div className="flex items-center justify-center">
            <svg
              className="h-4 w-4 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        ) : (
          <>{children}</>
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';
