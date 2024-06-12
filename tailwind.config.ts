/* eslint-disable func-names */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-restricted-syntax */

import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const slideAnimation = ({
  direction,
  offset,
  isShow,
  withoutDelay = false,
}:{
  direction: string,
  offset: number,
  isShow: boolean,
  withoutDelay?: boolean,
}) => {
  const opacityStart = isShow ? '0' : '1';
  const opacityEnd = isShow ? '1' : '0';

  const from = isShow ? `${offset}px` : '0px';
  const to = isShow ? '0px' : `${offset}px`;

  return {
    [`@keyframes custom-animation-${direction}${offset}`]: {
      [`0%, ${withoutDelay ? '0.01%' : '50%'}`]: {
        opacity: opacityStart,
        transform: `translate${direction}(${from})`,
      },
      '100%': {
        opacity: opacityEnd,
        transform: `translate${direction}(${to})`,
      },
    },
    animation: `custom-animation-${direction}${offset} 1 forwards`,
  };
};

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sen: ['Sen', 'sans'],
      },
      screens: {
        xs: '360px',
      },
    }
  },
  plugins: [
    plugin(({ matchUtilities }) => {
      matchUtilities({
        'animation-duration': (value) => ({
          'animation-duration': value,
        }),
        'custom-animation': (value) => {
          const split = value.split(' ');

          return slideAnimation({
            isShow: (split[0] === 'slide' && true) || (split[0] === 'hide' && false),
            direction: (split[1] === 'vertical' && 'Y') || (split[1] === 'horizontal' && 'X') || 'X',
            offset: Number(split[2]) || -50,
            withoutDelay: split[3] !== 'delay',
          });
        },
      });
    }),
  ],
};
export default config;
