'use client';

import Image from 'next/image';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Styles from './style.module.scss';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

const TestimonialFeature = () => (
  <>
    <h1 className="text-4xl text-center font-bold mb-24">
      Product List
    </h1>
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      loop
    >
      {[1, 2, 3].map((item) => (
        <SwiperSlide key={item}>
          <div className={Styles.contentSlider}>
            <div>
              <div>
                <Image
                  fill
                  alt="user"
                  sizes="150px"
                  src="https://awsimages.detik.net.id/community/media/visual/2018/03/03/39f24229-6f26-4a17-aa92-44c3bd3dae9e_43.jpeg?w=600&q=90"
                />
              </div>
              <div>
                <div>
                  <FaQuoteLeft className="mr-2" />
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Dolorem a voluptatum repellat.
                  <FaQuoteRight className="ml-2" />
                </div>
                <div>
                  Muhammad Maulana Yusuf
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </>
);

export default TestimonialFeature;
