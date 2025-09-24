import { FC, PropsWithChildren } from 'react';

export const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="relative flex h-full w-full justify-center bg-[#714AFFC7] bg-MAIN_BG bg-cover bg-center bg-no-repeat 768:justify-end">
      {children}
    </main>
  );
};
