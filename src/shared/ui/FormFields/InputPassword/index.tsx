import { forwardRef, type InputHTMLAttributes, useState, type PropsWithChildren } from 'react';
import { Icon } from 'src/shared/ui/icon';
import { clsx } from 'clsx';

interface InputPasswordProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: string;
}

export const InputPassword = forwardRef<HTMLInputElement, PropsWithChildren<InputPasswordProps>>(
  ({ className, error, placeholder, children, ...props }, ref) => {
    const [typeInput, setTypeInput] = useState<'text' | 'password'>('password');

    const iconType = typeInput === 'password' ? 'eye-usvisible' : 'eye-visible';
    const iconHeight = typeInput === 'password' ? '8' : '12';

    const handleCheckPassword = (): void => {
      setTypeInput((prevState) => {
        if (prevState === 'text') {
          return 'password';
        }
        return 'text';
      });
    };

    const isError = Boolean(error);

    return (
      <label className="mb-1.5 grid w-full grid-cols-[1fr_38px]">
        <span className="mt-[3px] text-[13px] text-primary-blue">{children}</span>
        <input
          name="password"
          {...props}
          placeholder={placeholder}
          ref={ref}
          className={clsx(
            'w-full rounded-l-md border border-grey-light bg-grey-light p-[7px] pl-[14px] focus:outline-none',
            'col-start-1 col-end-2',
            error && 'border-red-500',
            className,
          )}
          type={typeInput}
        />
        <button
          type="button"
          onClick={handleCheckPassword}
          className="col-start-2 col-end-3 m-auto h-full w-full place-items-center rounded-r-md bg-grey-light">
          <Icon width="18" height={iconHeight} icon={iconType} className="text-gray-600" />
        </button>
        {isError && <span className="mt-1 text-[13px] text-error-red">{error}</span>}
      </label>
    );
  },
);

InputPassword.displayName = 'PasswordInput';
