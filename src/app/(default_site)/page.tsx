'use client';

import BannersTopFeature from '@/features/banners-top';
import OutServicesFeature from '@/features/our-services';
import ProsuctListFeature from '@/features/product-list';
import TestimonialFeature from '@/features/testimonial';
import DefaultTemplateUi from '@/ui/default-template';

const HomePage = () => (
  <DefaultTemplateUi>
    <section className="mb-10">
      <BannersTopFeature />
    </section>
    <div className="flex flex-col gap-y-48 mb-48">
      <section className="container">
        <OutServicesFeature />
      </section>
      <section className="container">
        <ProsuctListFeature />
      </section>
      <section className="bg-[#f26522] text-white py-20">
        <div className="container">
          <h1 className="text-center text-4xl mb-5">We help you to grow your business</h1>
          <h2 className="text-center text-xl mb-32">We are here to acclerate your business and find a way</h2>
        </div>
      </section>
      <section className="container">
        <TestimonialFeature />
      </section>
    </div>
  </DefaultTemplateUi>
);
export default HomePage;
