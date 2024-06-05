'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookSquare } from 'react-icons/fa';

import GoogleMaps from '@/ui/googleMaps';

const index = () => (
  <>
    <div className="container pb-20 text-white">
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2">
          <img src="https://img.lovepik.com/background/20211020/large/lovepik-computer-background-image_400070620.jpg" width={300} height={150} alt="" />
          <div className="py-10">
            <Link href="/" className="gap-3 flex">
              <FaFacebookSquare size={22} />
              Komputer Bd
            </Link>
            {/* <Link href="/"><Icon type="Tokopedia" className="w-24" /></Link> */}

          </div>
        </div>
        <div className="w-full sm:w-1/2 flex justify-center">
          <Image className="rounded-tl-xl rounded-br-xl" src="/assets/image/mapBdComputer.jpeg" width={550} height={350} alt="" />
        </div>
      </div>
      <GoogleMaps />
    </div>
    <div className="border container" />
    <div className="container py-4 text-center text-white">
      © 2024 | Komputer Bd.
    </div>
  </>
);

export default index;
