'use client';

import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import CardProduct from '@/ui/cardProduct';
import products from './data';

const ProductListFeature = () => {
  const [showNavigation, setShowNavigation] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setShowNavigation(event.matches);
    };

    setShowNavigation(mediaQuery.matches);

    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Swiper
      breakpoints={{
        360: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }}
      navigation={showNavigation}
      loop
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="mySwiper"
    >
      {products.map((product) => (
        <SwiperSlide key={product.id} className="py-10  h-full">
          <CardProduct
            title={product.title}
            price={product.price}
            image={product.image}
            diskon={product.diskon}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductListFeature;
