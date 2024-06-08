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
            <div className="w-full md:w-2/3 flex flex-col md:flex-row gap-6 p-4 md:p-0">
              <div className="flex justify-center md:justify-start">
                <img
                  src={item.image}
                  alt="user"
                  className="w-24 md:w-36 h-16 md:h-24 rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="mb-5">
                  <FontAwesomeIcon icon={faQuoteLeft} className="mr-2" />
                  {item.content}
                  <FontAwesomeIcon icon={faQuoteRight} className="ml-2" />
                </div>
                <div className="mt-2 font-semibold">
                  {item.testimonialName}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default index;
