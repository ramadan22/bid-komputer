'use client';

import Image from 'next/image';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

const BannersTopFeature = () => (
  <Swiper
    modules={[Autoplay, Pagination]}
    slidesPerView={1}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    loop
  >
    {[1, 2, 3].map((item) => (
      <SwiperSlide key={item} className="relative aspect-[2/1] text-[1.5rem]">
        <Image
          fill
          priority
          quality={100}
          sizes="100vw"
          alt={`banner ${item}`}
          className="object-cover object-center"
          src="https://static.vecteezy.com/system/resources/previews/008/079/200/non_2x/computer-with-messengers-icons-3d-banner-with-copy-space-free-vector.jpg"
        />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default BannersTopFeature;
