'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import CardProduct from '@/ui/cardProduct';

const ProductListFeature = () => {
  const products = [
    {
      id: 1,
      image: 'https://cdn.topsellbelanja.com/wp-content/uploads/2023/08/Laptop-Macbook-Apple-1-c.webp',
      title: 'lorem ipsum is doler amet ipdeolam hujam lorem ipsum is doler amet ipdeolam hujam',
      price: 'Rp. 30,000',
      diskon: {
        value: '30',
        item: '%',
        diskonPrice: 'Rp. 21,000'
      }
    },
    {
      id: 2,
      image: 'https://cdn.topsellbelanja.com/wp-content/uploads/2023/08/Laptop-Macbook-Apple-2-c.webp',
      title: 'product2',
      price: 'Rp. 40,000',
      diskon: {
        value: '20',
        item: '%',
        diskonPrice: 'Rp. 32,000'
      }
    },
    {
      id: 3,
      image: 'https://cdn.topsellbelanja.com/wp-content/uploads/2023/08/Laptop-Macbook-Apple-1-c.webp',
      title: 'product3',
      price: 'Rp. 50,000',
      diskon: null
    },
    {
      id: 4,
      image: 'https://cdn.topsellbelanja.com/wp-content/uploads/2023/08/Laptop-Macbook-Apple-2-c.webp',
      title: 'product4',
      price: 'Rp. 60,000',
      diskon: {
        value: '30000',
        item: 'Rp',
        diskonPrice: 'Rp. 30,000'
      }
    },
    {
      id: 5,
      image: 'https://cdn.topsellbelanja.com/wp-content/uploads/2023/08/Laptop-Macbook-Apple-1-c.webp',
      title: 'product5',
      price: 'Rp. 70,000',
      diskon: null
    },
    {
      id: 6,
      image: 'https://cdn.topsellbelanja.com/wp-content/uploads/2023/08/Laptop-Macbook-Apple-2-c.webp',
      title: 'product6',
      price: 'Rp. 80,000',
      diskon: {
        value: '30000',
        item: 'Rp',
        diskonPrice: 'Rp. 50,000'
      }
    },
    {
      id: 7,
      image: 'https://cdn.topsellbelanja.com/wp-content/uploads/2023/08/Laptop-Macbook-Apple-1-c.webp',
      title: 'product7',
      price: 'Rp. 90,000',
      diskon: null
    }
  ];

  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      navigation
      loop
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="mySwiper"
    >
      {products.map((product) => (
        <SwiperSlide key={product.id} className="py-10 h-full">
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
