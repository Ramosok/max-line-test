import { forwardRef, InputHTMLAttributes, useState } from 'react';
import { Icon } from 'src/shared/ui/FormFields/InputPassword/icon';
import { clsx } from 'clsx';

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  hint?: string;
  error?: string;
  regexRestrictedSymbols?: RegExp;
  isValid?: boolean;
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, label, error, placeholder, ...props }, ref) => {
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

    return (
      <label className="grid w-fit grid-cols-[1fr_38px] rounded-md border border-grey-light">
        <input
          name="password"
          {...props}
          placeholder={placeholder}
          ref={ref}
          className={clsx(
            'w-full p-[7px] focus:outline-none',
            'col-start-1 col-end-2',
            error && 'border-red-500',
            className,
          )}
          type={typeInput}
        />
        <button
          type="button"
          onClick={handleCheckPassword}
          className="col-start-2 col-end-3 m-auto h-full place-items-center">
          <Icon width="18" height={iconHeight} icon={iconType} className="text-gray-600" />
        </button>
      </label>
    );
  },
);

PasswordInput.displayName = 'PasswordInput';
