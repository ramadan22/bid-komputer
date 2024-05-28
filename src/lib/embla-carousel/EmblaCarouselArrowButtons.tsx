import { EmblaCarouselType } from 'embla-carousel';
import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useState
} from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

import { cn } from '@/lib/classnames';
import Styles from './style.module.scss';

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean
  nextBtnDisabled: boolean
  onPrevButtonClick: () => void
  onNextButtonClick: () => void
}

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApiParam: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApiParam.canScrollPrev());
    setNextBtnDisabled(!emblaApiParam.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  };
};

type PropType = PropsWithChildren<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>

export const PrevButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      // className={cn(Styles.embla__button, Styles.embla__button--prev}
      className={cn(Styles.embla__button)}
      type="button"
      {...restProps}
    >
      <FaChevronLeft size={50} />
      {children}
    </button>
  );
};

export const NextButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      // className="embla__button embla__button--next"
      className={Styles.embla__button}
      type="button"
      {...restProps}
    >
      <FaChevronRight size={50} />
      {children}
    </button>
  );
};
