import { forwardRef, type InputHTMLAttributes, type PropsWithChildren } from 'react';
import InputMask from 'react-input-mask';
import { clsx } from 'clsx';
import { Icon } from 'src/shared/ui/icon';

interface InputPhoneProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  className?: string;
  error?: string;
}

export const InputPhone = forwardRef<HTMLInputElement, PropsWithChildren<InputPhoneProps>>(
  ({ className, error, placeholder, children, ...props }, ref) => {
    const isError = Boolean(error);

    const { inputRef, ...filteredProps } = props as any;

    return (
      <label className="mb-1.5 w-full">
        <span className="mt-[3px] text-[13px] text-primary-blue">{children}</span>
        <div className="grid w-full grid-cols-[44px_1fr]">
          <span className="flex items-center justify-center rounded-l-md bg-white">
            <Icon width="18" height="12" icon="flag-by" />
          </span>
          <InputMask
            name="phone"
            ref={ref}
            mask="+375 99 999 99 99"
            {...filteredProps}
            inputMode="numeric"
            placeholder={placeholder}
            className={clsx(
              'w-full rounded-r-md border border-grey-light bg-grey-light p-[7px] pl-[14px] focus:outline-none',
              error && 'border-red-500',
              className,
            )}
            type="tel"
          />
        </div>
        {isError && <span className="mt-1 text-[13px] text-error-red">{error}</span>}
      </label>
    );
  },
);

InputPhone.displayName = 'InputPhone';
