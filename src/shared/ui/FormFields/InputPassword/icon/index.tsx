import { FC } from 'react';

import spriteUrl from './sprites.svg';

type IconName = 'eye-usvisible' | 'eye-visible';

export interface IconProps {
  icon: IconName;
  width?: `${number}`;
  height?: `${number}`;
  className?: string;
}

export const Icon: FC<IconProps> = ({ icon, width = '24', height = '24', className }) => {
  return (
    <svg className={className} width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <use href={`${spriteUrl}#${icon}`} />
    </svg>
  );
};
