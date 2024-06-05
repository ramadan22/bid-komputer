'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Styles from './style.module.scss';
import { CardProductProps } from './types';

const CardProduct = ({
  title, price, image, diskon
}: CardProductProps) => {
  const [formattedValue, setFormattedValue] = useState<string | null>(null);

  useEffect(() => {
    if (diskon) {
      setFormattedValue(Number(diskon.value).toLocaleString());
    }
  }, [diskon]);

  return (
    <div className={Styles.boxCard}>
      <Link href="/" className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
        {diskon && (
          <p className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded">
            Diskon
            {' '}
            {diskon.item === '%' ? (
              <>
                {diskon.value}
                {diskon.item}
              </>
            ) : (
              <>
                {diskon.item}
                {' '}
                {formattedValue}
              </>
            )}
          </p>
        )}
      </Link>
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div className="">
          <Link href="/">
            <h5 className="mb-2 line-clamp-2 text-lg font-bold tracking-tight text-gray-900">{title}</h5>
          </Link>
          {diskon ? (
            <div className="mb-3">
              <p className="text-gray-500 line-through">{price}</p>
              <p className="text-red-500">{diskon.diskonPrice}</p>
            </div>
          ) : (
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{price}</p>
          )}
        </div>
        <Link href="/" className="w-full bg-[#5b67ba] hover:bg-[#505ba8] text-white text-center py-2 rounded-sm">
          Beli Sekarang
        </Link>
      </div>
    </div>
  );
};

export default CardProduct;
