import freespinAmount from 'src/shared/assets/200.webp';
import { useLayoutEffect, useRef } from 'react';

export const BonusBlock = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (containerRef.current) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name.includes('200.webp')) {
            console.log('LCP элемент загружен:', entry);
          }
        }
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }
  }, []);
  return (
    <div
      ref={containerRef}
      className="relative left-0 top-0 z-[3] flex h-auto max-w-[100vw] scale-100 flex-col items-center justify-center overflow-x-hidden contain-layout contain-paint 768:left-32 768:top-[20vh] 768:scale-[60%] 968:scale-75 1024:left-12 1024:scale-100">
      <div className="mt-[35px] flex h-[170px] w-[420px] items-center justify-center bg-FLAME_BG bg-cover bg-center bg-no-repeat pl-1.5 768:h-[340px] 768:w-[820px]">
        <img
          loading="eager"
          decoding="sync"
          className="absolute top-[27px] w-[280px] object-contain object-center 768:w-[545px]"
          src={freespinAmount}
          alt="бонус 200 фриспинов"
        />
        <div className="flex h-full w-[340px] items-end justify-center bg-BONUS_BG bg-contain bg-center bg-no-repeat font-MTS_Sans 768:w-[670px]">
          <p className="text-[39px] font-black text-azure 768:text-[78px]">ФРИСПИНОВ</p>
        </div>
      </div>
      <p className="leading-0 -translate-y-2 font-MTS_Sans text-[25px] font-black text-white [text-shadow:0_4px_0_#000] 768:-translate-y-7 768:text-[50px]">
        ЗА РЕГИСТРАЦИЮ
      </p>
    </div>
  );
};
