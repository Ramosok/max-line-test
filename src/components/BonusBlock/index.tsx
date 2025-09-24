export const BonusBlock = () => {
  return (
    <div className="relative z-[1] flex h-fit flex-col items-center justify-center contain-layout contain-paint">
      <div className="mt-[100px] flex h-[342px] w-[820px] items-center justify-center bg-FLAME_BG bg-cover bg-center bg-no-repeat pl-1.5">
        <p className="text-MTS_Sans absolute top-0 h-fit text-[275px] font-black text-white [text-shadow:5px_20px_0_#000000]">
          200
        </p>
        <div className="flex h-full w-full items-end justify-center bg-BONUS_BG bg-center bg-no-repeat">
          <p className="text-azure text-[78px] font-black">ФРИСПИНОВ</p>
        </div>
      </div>
      <p className="text-MTS_Sans leading-0 -translate-y-5 text-[50px] font-black text-white [text-shadow:0_3.06px_0_#000000]">
        ЗА РЕГИСТРАЦИЮ
      </p>
    </div>
  );
};
