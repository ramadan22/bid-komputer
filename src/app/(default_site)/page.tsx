'use client';

/* eslint-disable react/no-array-index-key */

import { EmblaOptionsType } from 'embla-carousel';
import Link from 'next/link';
import { FaFacebookSquare, FaPhoneAlt, FaRegClock } from 'react-icons/fa';
import { MdComputer } from 'react-icons/md';

import Icon from '@/components/icon';
import Label from '@/components/label';
import EmblaCarousel from '@/lib/embla-carousel';

const HomePage = () => {
  const OPTIONS: EmblaOptionsType = {};
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <>
      <nav>
        <div className="bg-black text-white py-2.5">
          <div className="container flex gap-x-5 justify-end items-center">
            <Link href="/">
              <FaFacebookSquare size={22} />
            </Link>
            <Link href="/"><Icon type="Tokopedia" /></Link>
          </div>
        </div>
        <div className="flex justify-between items-center container">
          <div className="flex items-center gap-x-2">
            <div className="w-20 h-20 rounded-full bg-[#5b67ba] flex justify-center items-center text-white text-6xl">B</div>
            <Label className="uppercase text-[#5b67ba] text-3xl">Bid Komputer</Label>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex gap-x-10 mt-5 mb-10">
              <div className="flex items-center gap-x-3 text-[#6a6a6a]">
                <FaPhoneAlt size={28} />
                <div className="flex flex-col gap-y-1.5">
                  <Label>Contact US</Label>
                  <Label className="font-bold text-[#f36622]">0815-8676-9887</Label>
                </div>
              </div>
              <div className="flex items-center gap-x-3 text-[#6a6a6a]">
                <FaRegClock size={30} />
                <div className="flex flex-col gap-y-1.5">
                  <Label>Open</Label>
                  <Label className="font-bold text-[#f36622]">Senin - Jumat</Label>
                </div>
              </div>
            </div>
            <div className="mb-2.5">
              <ul>
                <li className="flex gap-x-8 [&>a]:text-lg">
                  <Link href="/">Home</Link>
                  <Link href="/">Product</Link>
                  <Link href="/">Services</Link>
                  <Link href="/">Blog</Link>
                  <Link href="/">About Us</Link>
                  <Link href="/">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <section className="mb-10">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </section>
      <div className="flex flex-col gap-y-48">
        <section className="container">
          <h1 className="text-center text-4xl mb-32">Our Services</h1>
          <div className="grid grid-cols-3 items-center justify-center gap-x-10 gap-y-32">
            {[1, 2, 3, 4, 5, 6].map((item, idx) => (
              <div key={idx} className="border relative p-10 pt-20 shadow-sm rounded bg-[#f4f4f4] text-[#808291]">
                <div className="absolute top-0 inset-x-0 mx-auto -mt-16 bg-[#5b67ba] text-white flex items-center justify-center w-32 h-32 rounded-full">
                  <MdComputer size={90} />
                </div>
                <h1 className="text-xl text-center font-bold mb-2">Desktop Service</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec ipsum dolor sit amet, consectetur ut erat nec leo
                  lobortis blandit.
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-[#f26522] text-white py-20">
          <div className="container">
            <h1 className="text-center text-4xl mb-5">We help you to grow your business</h1>
            <h2 className="text-center text-xl mb-32">We are here to acclerate your business and find a way</h2>
          </div>
        </section>
      </div>
      <footer>footer</footer>
    </>
  );
};

export default HomePage;
