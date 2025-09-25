import { FC } from 'react';
import { InputPhone } from 'src/shared/ui/FormFields/InputPhone';
import { InputPassword } from 'src/shared/ui/FormFields/InputPassword';
import { Checkbox } from 'src/shared/ui/FormFields/Checkbox';
import { Button } from 'src/shared/ui/Button';
import { useForm, Controller, Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registrationValidationSchema } from 'src/widgets/Form/validation';
import { useRegister } from 'src/widgets/Form/hooks/useRegister';

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
    reset,
    setError,
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

  const { mutateAsync, isPending } = useRegister();

  const handleSubmitForm = (formData: FormData) => {
    mutateAsync(formData)
      .then(() => reset())
      .catch((e) => {
        setError('phone', { message: e?.message });
      });
  };

  return (
    <article className="z-[3] flex h-[45vh] min-h-[426px] w-full min-w-full flex-col items-center self-end rounded-t-3xl bg-purple-darkest px-[50px] pt-[30px] contain-layout contain-paint 768:h-full 768:w-[400px] 768:min-w-[400px] 768:justify-center 768:rounded-none 768:bg-black_07 768:p-[50px] 768:pt-0 1024:w-[480px] 1024:p-[60px] 1280:w-[580px] 1280:p-[100px]">
      <h2 className="mb-4 w-full text-[22px] font-medium text-white">Регистрация</h2>
      <form autoComplete="off" onSubmit={handleSubmit(handleSubmitForm)}>
        <InputPhone
          disabled={isPending}
          placeholder="+375"
          {...register('phone')}
          error={errors.phone?.message}>
          Номер телефона
        </InputPhone>
        <InputPassword
          disabled={isPending}
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
                «Политику конфиденциальности»
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

        <Button isLoading={isPending} disabled={!isValid || isPending} className="mt-[28px]">
          регистрация
        </Button>
      </form>
    </article>
  );
};
