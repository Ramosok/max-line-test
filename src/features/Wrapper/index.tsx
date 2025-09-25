import { FC, PropsWithChildren } from 'react';

export const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="relative flex h-[100dvh] w-full flex-col justify-between overflow-x-hidden bg-[#714AFFC7] bg-MAIN_BG bg-cover bg-center bg-no-repeat 768:flex-row 768:justify-end">
      {children}
    </main>
  );
};
