import { FC } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Wrapper } from 'src/components/Wrapper';
import { Form } from 'src/widgets/Form';
import zeus from 'src/shared/assets/zeus.webp';
import { Title } from 'src/components/Title';
import { BonusBlock } from 'src/components/BonusBlock';

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
      <Wrapper>
        <BonusBlock />

        <img
          className="absolute bottom-0 left-12 aspect-[741/1075] w-full max-w-[741px] object-contain"
          alt="zeus"
          src={zeus}
        />
        <Form />
      </Wrapper>
    </QueryClientProvider>
  );
};
