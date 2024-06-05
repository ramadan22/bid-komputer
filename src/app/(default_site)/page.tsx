'use client';

/* eslint-disable react/no-array-index-key */

import { MdComputer } from 'react-icons/md';

import BannersTopFeature from '@/features/bannersTop';

import ProsuctListFeature from '@/features/productlist';
import TestimonialFeature from '@/features/testimonial';
import DefaultTemplateUi from '@/ui/default-template';

const HomePage = () => (
  <DefaultTemplateUi>

    <section className="mb-10">
      <BannersTopFeature />
      {/* <EmblaCarousel slides={SLIDES} options={OPTIONS} /> */}
    </section>
    <div className="flex flex-col gap-y-48 mb-48">
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
      <section className="container">
        <div className="text-4xl text-center font-bold mb-24">
          Product List
        </div>
        <ProsuctListFeature />
      </section>
      <section className="bg-[#f26522] text-white py-20 ">
        <div className="container">
          <h1 className="text-center text-4xl mb-5">We help you to grow your business</h1>
          <h2 className="text-center text-xl mb-32">We are here to acclerate your business and find a way</h2>
        </div>
      </section>
      <section className="container">
        <div className="text-4xl text-center font-bold mb-24">
          Testmonial
        </div>
        <TestimonialFeature />
      </section>
    </div>

  </DefaultTemplateUi>
);
export default HomePage;
