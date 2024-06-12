'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookSquare } from 'react-icons/fa';

import MapBdComputer from '@/assets/images/mapBdComputer.jpeg';

const FooterFeature = () => (
  <>
    <div className="container pb-20 text-white">
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 flex flex-col">
          <div className="w-[400px] aspect-[2/1] relative">
            <Image
              fill
              sizes="200px"
              alt="Store"
              className="object-cover w-full rounded-md"
              src="https://img.lovepik.com/background/20211020/large/lovepik-computer-background-image_400070620.jpg"
            />
          </div>
          <div className="py-10">
            <Link href="/" className="gap-3 flex">
              <FaFacebookSquare size={22} />
              Komputer Bd
            </Link>
          </div>
        </div>
        <div className="w-full sm:w-1/2 flex justify-center">
          <Image
            className="w-full h-auto rounded-tl-xl rounded-br-xl"
            src={MapBdComputer}
            width={0}
            height={0}
            sizes="100vw"
            alt=""
          />
        </div>
      </div>
    </div>
    <div className="border container" />
    <div className="container py-4 text-center text-white">
      © 2024 | Komputer Bd.
    </div>
  </>
);

export default FooterFeature;
