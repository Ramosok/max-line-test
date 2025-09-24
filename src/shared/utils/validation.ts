import { parsePhoneNumberFromString } from 'libphonenumber-js';
import * as yup from 'yup';

declare module 'yup' {
  interface Schema {
    passwordSchema(): Schema;
    booleanSchema(): Schema;
    phoneNumberSchema(): Schema;
  }
}

const PASSWORD_REGEXP = /^[0-9a-zA-Z#$-._@&!;%:?*()^]+$/;

export const MIN_LENGTH_PASSWORD = 6;
export const MAX_PASSWORD_LENGTH = 64;

yup.addMethod(yup.StringSchema, 'passwordSchema', function passwordSchema(_) {
  return this.matches(PASSWORD_REGEXP, 'Цифра, латинские буквы или #$-._@&!;%:?*()^')
    .min(MIN_LENGTH_PASSWORD, 'Пароль должен содержать минимум 6 символов')
    .max(MAX_PASSWORD_LENGTH, 'Пароль должен содержать максимум 64 символа');
});

yup.addMethod(yup.BooleanSchema, 'booleanSchema', function validateBoolean() {
  return this.oneOf([true], 'Поля является обязательным');
});

yup.addMethod(yup.StringSchema, 'phoneNumberSchema', function validatePhone() {
  return this.test('phone', 'Введите корректный номер телефона', (value) => {
    if (value) {
      const phone = value.startsWith('+') ? value : `+${value}`;
      const parsePhone = parsePhoneNumberFromString(phone);
      return parsePhone?.isValid() || false;
    }
    return true;
  });
});

export { yup };
