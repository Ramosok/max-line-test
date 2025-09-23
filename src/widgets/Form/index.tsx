import { FC } from 'react';
import { InputPhone } from 'src/shared/ui/FormFields/InputPhone';
import { InputPassword } from 'src/shared/ui/FormFields/InputPassword';
import { Checkbox } from 'src/shared/ui/FormFields/Checkbox';
import { Button } from 'src/shared/ui/Button';
import { useForm, Controller, Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registrationValidationSchema } from 'src/widgets/Form/validation';

export interface FormData {
  phone: string;
  password: string;
  isAge: boolean;
  isBonusAccepted: boolean;
}
const resolver: Resolver<FormData> = yupResolver(
  registrationValidationSchema,
) as Resolver<FormData>;

export const Form: FC = () => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors, isValid },
  } = useForm<FormData>({
    defaultValues: {
      phone: '',
      password: '',
      isAge: false,
      isBonusAccepted: false,
    },
    mode: 'onTouched',
    shouldFocusError: true,
    resolver,
  });

  const handleSubmitForm = (formData: FormData) => {
    console.log(formData);
  };

  return (
    <div className="flex h-full w-[580px] flex-col items-center justify-center bg-black_07 p-[100px]">
      <h2 className="mb-4 w-full text-[22px] font-medium text-white">Регистрация</h2>
      <form autoComplete="off" onSubmit={handleSubmit(handleSubmitForm)}>
        <InputPhone placeholder="+375" {...register('phone')} error={errors.phone?.message}>
          Номер телефона
        </InputPhone>
        <InputPassword
          placeholder="Придумайте пароль"
          error={errors.password?.message}
          {...register('password')}>
          Пароль
        </InputPassword>

        <Controller
          name="isAge"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Checkbox checked={value} onChange={onChange} containerClassName="mt-6 mb-1.5">
              Мне больше 21 года. <br /> Я согласен и принимаю
              <a
                className="mx-0.5 underline"
                target="_blank"
                href="https://cdn.maxline.by/files/rules.pdf">
                «Правила приема ставок»
              </a>
              и
              <a
                className="mx-0.5 underline"
                target="_blank"
                href="https://cdn.maxline.by/files/personal_data_ru.pdf">
                «Политику конциденциальности»
              </a>
            </Checkbox>
          )}
        />

        <Controller
          name="isBonusAccepted"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Checkbox checked={value} onChange={onChange}>
              Я принимаю участие и согласен с
              <a
                target="_blank"
                className="mx-0.5 underline"
                href="https://cdn-01.maxline.by/files/registration_bonus_rules.pdf">
                условиями бонуса
              </a>
            </Checkbox>
          )}
        />

        <Button disabled={!isValid} className="mt-[22px]">
          регистрация
        </Button>
      </form>
    </div>
  );
};
