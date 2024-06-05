'use client';

import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

const index = () => {
  const banners = [
    {
      id: 1,
      image: 'https://static.vecteezy.com/system/resources/previews/008/079/200/non_2x/computer-with-messengers-icons-3d-banner-with-copy-space-free-vector.jpg'
    },
    {
      id: 2,
      image: 'https://img.lovepik.com/background/20211020/large/lovepik-computer-background-image_400070620.jpg'
    },
    {
      id: 3,
      image: 'https://static.vecteezy.com/system/resources/previews/008/079/200/non_2x/computer-with-messengers-icons-3d-banner-with-copy-space-free-vector.jpg'
    },
    {
      id: 4,
      image: 'https://img.lovepik.com/background/20211020/large/lovepik-computer-background-image_400070620.jpg'
    },
    {
      id: 5,
      image: 'https://static.vecteezy.com/system/resources/previews/008/079/200/non_2x/computer-with-messengers-icons-3d-banner-with-copy-space-free-vector.jpg'
    },
    {
      id: 6,
      image: 'https://img.lovepik.com/background/20211020/large/lovepik-computer-background-image_400070620.jpg'
    },
    {
      id: 7,
      image: 'https://static.vecteezy.com/system/resources/previews/008/079/200/non_2x/computer-with-messengers-icons-3d-banner-with-copy-space-free-vector.jpg'
    },

  ];
  return (

    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop
      className="mySwiper"
    >
      {banners.map((banner) => (
        <SwiperSlide key={banner.id}>
          <img
            src={banner.image}
            alt={`banner ${banner.id}`}
            className="w-full"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default index;
