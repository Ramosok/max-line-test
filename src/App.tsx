import { FC } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Wrapper } from 'src/features/Wrapper';
import { Form } from 'src/widgets/Form';
import { Title } from 'src/features/Title';
import { BonusBlock } from 'src/features/BonusBlock';
import { ImagesBlock } from 'src/features/ImagesBlock';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export const App: FC = () => {
  const isMinHeight = window.matchMedia('(max-height: 669px)').matches;

  return (
    <QueryClientProvider client={queryClient}>
      <Wrapper>
        <div className="flex h-min flex-col items-center px-5">
          <Title />
          <BonusBlock />
        </div>
        {!isMinHeight && <ImagesBlock />}
        <Form />
      </Wrapper>
    </QueryClientProvider>
  );
};
