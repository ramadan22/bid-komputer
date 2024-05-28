'use client';

/* eslint-disable jsx-a11y/alt-text */

import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import React from 'react';

// import { cn } from '@/lib/classnames';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons';
// import { DotButton, useDotButton } from './EmblaCarouselDotButton';
// import { useDotButton } from './EmblaCarouselDotButton';
import Styles from './style.module.scss';

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  // const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);

  return (
    <section className={Styles.embla}>
      <div className={Styles.embla__viewport} ref={emblaRef}>
        <div className={Styles.embla__container}>
          {slides.map((index) => (
            <div className={Styles.embla__slide} key={index}>
              <div className={Styles.embla__slide__number}>
                <img src="https://picsum.photos/id/1/1600/600" className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={Styles.embla__controls}>
        <div className={Styles.embla__buttons}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        {/* <div className={Styles.embla__dots}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              // className={Styles.embla__dot}
              className={cn(
                Styles.embla__dot,
                index === selectedIndex && Styles.embla__dot__selected
              )}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default EmblaCarousel;
