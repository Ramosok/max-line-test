import { yup } from 'src/shared/utils/validation.ts';
import { ObjectSchema } from 'yup';
import { FormData } from 'src/widgets/Form';

export const registrationValidationSchema: ObjectSchema<FormData> = yup.object().shape({
  phone: yup.string().required('Поля является обязательным').phoneNumberSchema(),
  password: yup.string().passwordSchema(),
  isAge: yup.boolean().booleanSchema(),
  isBonusAccepted: yup.boolean().booleanSchema(),
}) as ObjectSchema<FormData>;
