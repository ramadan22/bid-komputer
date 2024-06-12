'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import CardProductUI from '@/ui/card/CardProduct';
import products from './hooks';

const ProductListFeature = () => (
  <div>
    <h1 className="text-4xl text-center font-bold mb-24">
      Product List
    </h1>
    <div className="px-6">
      <Swiper
        breakpoints={{
          360: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
        loop
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        wrapperClass="flex mb-16"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="!h-auto">
            <CardProductUI
              title={product.title}
              price={product.price}
              image={product.image}
              diskon={product.diskon}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
);

export default ProductListFeature;
