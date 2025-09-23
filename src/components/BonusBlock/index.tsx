export const BonusBlock = () => {
  return (
    <div className="relative h-[379px] w-[683px]">
      {/* +20px для отступов */}
      {/* Черный фон с отступами */}
      {/*<div className="bg-black absolute left-[10px] top-[78px] h-[301px] w-[663px]" />*/}
      {/* Основная карточка */}
      <div className="absolute left-[10px] top-0 h-[301px] w-[663px] drop-shadow-[0_68px_0_rgba(0,0,0,1)] filter">
        {/* Градиентная заливка */}
        <div
          className="h-full w-full"
          style={{
            clipPath:
              'path("M9 40.9369C9 21.1081 26.7807 5.97204 46.3842 8.95277C108.892 18.4571 237.059 36 331.5 36C425.941 36 554.108 18.4571 616.616 8.95278C636.219 5.97205 654 21.1081 654 40.9369V192C654 209.673 639.673 224 622 224H41C23.3269 224 9 209.673 9 192V40.9369Z")',
            background: 'linear-gradient(180deg, #00FFD5 0%, #00BAFE 100%)',
          }}
        />

        {/* Обводка */}
        <div
          className="absolute left-0 top-0 h-full w-full"
          style={{
            clipPath:
              'path("M615.993 4.85547C638.079 1.49754 658.143 18.5454 658.144 40.9365V192C658.144 211.962 641.962 228.144 622 228.144H41C21.0382 228.144 4.85645 211.962 4.85645 192V40.9365C4.85666 18.5454 24.9211 1.49751 47.0068 4.85547C109.521 14.3608 237.407 31.8564 331.5 31.8564C425.593 31.8564 553.479 14.3608 615.993 4.85547Z")',
            border: '4.144px solid #000',
            boxSizing: 'border-box',
          }}
        />
      </div>
    </div>
  );
};
