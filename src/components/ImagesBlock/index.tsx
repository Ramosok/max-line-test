import { FC } from 'react';
import zeus from 'src/shared/assets/zeus.webp';
import azure from 'src/shared/assets/azure.webp';
import gold from 'src/shared/assets/gold.webp';
import diamond from 'src/shared/assets/diamond.webp';

export const ImagesBlock: FC = () => {
  return (
    <>
      <img
        className="768:translate-x-0-translate-x-1/2 absolute bottom-[20%] left-1/2 z-[2] mt-2 aspect-[741/1075] w-[370px] max-w-[741px] object-contain 768:bottom-0 768:left-10 768:w-full"
        alt="zeus"
        src={zeus}
      />
      <svg
        className="absolute bottom-0 left-0 z-[1] hidden 768:block"
        width="949"
        height="854"
        viewBox="0 0 949 854"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_4_512)">
          <ellipse cx="429.638" cy="936" rx="417.638" ry="834" fill="#AB4AFF" fill-opacity="0.78" />
        </g>
        <defs>
          <filter
            id="filter0_f_4_512"
            x="-89.3542"
            y="0.645836"
            width="1037.98"
            height="1870.71"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="50.6771" result="effect1_foregroundBlur_4_512" />
          </filter>
        </defs>
      </svg>
      <img
        loading="lazy"
        src={diamond}
        alt="diamond"
        className="absolute bottom-0 left-[45%] hidden w-[230px] 768:block 768:w-[560px]"
      />
      <img
        loading="lazy"
        src={azure}
        alt="azure"
        className="absolute left-0 top-[32%] z-[1] w-[230px] 768:w-[560px]"
      />
      <img
        loading="lazy"
        src={gold}
        alt="gold"
        className="absolute -right-[107px] top-[42%] z-20 w-[230px] 768:right-[21%] 768:top-[3%] 768:z-[1] 768:w-[360px]"
      />
      <svg
        className="absolute hidden 768:block"
        width="1000"
        height="466"
        viewBox="0 0 1000 466"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_4_513)">
          <ellipse
            cx="519.638"
            cy="-470"
            rx="417.638"
            ry="834"
            fill="#714AFF"
            fill-opacity="0.78"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_4_513"
            x="0.645836"
            y="-1405.35"
            width="1037.98"
            height="1870.71"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="50.6771" result="effect1_foregroundBlur_4_513" />
          </filter>
        </defs>
      </svg>
    </>
  );
};
