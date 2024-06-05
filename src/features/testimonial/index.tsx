'use client';

import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

const index = () => {
  const testimonial = [
    {
      id: 1,
      testimonialName: 'haris ramadhan',
      image: 'https://awsimages.detik.net.id/community/media/visual/2018/03/03/39f24229-6f26-4a17-aa92-44c3bd3dae9e_43.jpeg?w=600&q=90',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem a voluptatum repellat.'
    },
    {
      id: 2,
      testimonialName: 'maulana yusuf',
      image: 'https://awsimages.detik.net.id/community/media/visual/2018/03/03/39f24229-6f26-4a17-aa92-44c3bd3dae9e_43.jpeg?w=600&q=90',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem a voluptatum repellat.'
    },
    {
      id: 2,
      testimonialName: 'ainul aji',
      image: 'https://awsimages.detik.net.id/community/media/visual/2018/03/03/39f24229-6f26-4a17-aa92-44c3bd3dae9e_43.jpeg?w=600&q=90',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem a voluptatum repellat.'
    },
  ];
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      loop
      className="mySwiper"
    >
      {testimonial.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="flex justify-center items-center h-full">
            <div className="w-2/3 grid grid-cols-3">
              <div className="col-span-1 flex justify-center">
                <img
                  src={item.image}
                  alt="user"
                  className="w-36 rounded-full"
                />
              </div>
              <div className="col-span-2">
                <div className="mb-5">
                  <FontAwesomeIcon icon={faQuoteLeft} className="mr-2" />
                  {item.content}
                  <FontAwesomeIcon icon={faQuoteRight} className="ml-2" />
                </div>
                {item.testimonialName}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default index;
