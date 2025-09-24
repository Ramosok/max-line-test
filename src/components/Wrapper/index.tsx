import { FC, PropsWithChildren } from 'react';
import zeus from 'src/shared/assets/zeus.webp';

export const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative flex h-full w-full justify-center bg-[#714AFFC7] bg-MAIN_BG bg-cover bg-center bg-no-repeat 768:justify-end">
      <img
        className="absolute bottom-0 left-0 aspect-[741/1075] w-[38vw] max-w-[741px] object-contain"
        alt="zeus"
        src={zeus}
      />
      {children}
    </div>
  );
};
