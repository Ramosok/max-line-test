import { InputHTMLAttributes, forwardRef, type PropsWithChildren } from 'react';
import clsx from 'clsx';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  error?: string;
  containerClassName?: string;
  labelClassName?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, PropsWithChildren<CheckboxProps>>(
  (props, ref) => {
    const {
      children,
      className,
      containerClassName,
      labelClassName,
      error = false,
      disabled = false,
      ...restProps
    } = props;

    const isError = Boolean(error);

    return (
      <div className={clsx('flex flex-col', containerClassName)}>
        <label
          className={clsx(
            'inline-flex cursor-pointer items-center',
            disabled && 'cursor-not-allowed opacity-60',
          )}>
          <input
            name="checkbox"
            ref={ref}
            type="checkbox"
            disabled={disabled}
            className="absolute h-0 w-0 opacity-0"
            {...restProps}
          />

          <span
            className={clsx(
              'relative inline-flex items-center justify-center',
              'mr-2 h-[18px] w-[18px] rounded-[4px] border transition-all duration-200',
              'mt-0.5 flex-shrink-0',
              restProps.checked ? 'border-[#5AB828] bg-[#5AB828]' : 'border-[#E8EAF0] bg-white',
              isError && 'border-red-500',
              className,
            )}>
            {restProps.checked && (
              <svg
                width="10"
                height="8"
                viewBox="0 0 10 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 4L4 7L9 1"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </span>
          {children && (
            <span
              className={clsx(
                'select-none text-[11px] leading-[14px] text-primary-blue',
                disabled && 'opacity-60',
                labelClassName,
              )}>
              {children}
            </span>
          )}
        </label>

        {isError && <span className="text-red-500 mt-1 pl-8 text-sm font-medium">{error}</span>}
      </div>
    );
  },
);

Checkbox.displayName = 'Checkbox';
