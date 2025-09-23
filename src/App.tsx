import { FC } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Button } from 'src/shared/ui/Button';
import { Checkbox } from 'src/shared/ui/FormFields/Checkbox';
import { PasswordInput } from 'src/shared/ui/FormFields/InputPassword';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>!!!!!!!!!</div>
      <Button>регистрация</Button>
      <Checkbox>
        Мне больше 21 года. Я согласен и принимаю «Правила приема ставок» и «Политику
        конциденциальности»
      </Checkbox>
      <PasswordInput />
    </QueryClientProvider>
  );
};
