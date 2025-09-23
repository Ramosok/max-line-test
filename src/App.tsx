import { FC } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Wrapper } from 'src/components/Wrapper';
import { Form } from 'src/widgets/Form';

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
        {/* <Title /> */}
        {/* <BonusBlock/> */}
        <Form />
      </Wrapper>
    </QueryClientProvider>
  );
};
