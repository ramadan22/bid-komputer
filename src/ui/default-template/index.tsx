import Link from 'next/link';
import {
  FaFacebookSquare, FaPhoneAlt, FaRegClock
} from 'react-icons/fa';

import Icon from '@/components/icon';
import Label from '@/components/label';
import FooterFeature from '@/features/footer';
import Styles from './style.module.scss';

const DefaultTemplateUi = ({ children }: { children:React.ReactNode}) => (
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
      <div className="flex justify-between items-center container py-2 px-2">
        <div className="flex items-center gap-x-2">
          <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-[#5b67ba] flex justify-center items-center text-white text-2xl lg:text-6xl">B</div>
          <Label className="uppercase text-[#5b67ba] text-lg lg:text-3xl">Bid Komputer</Label>
        </div>
        <div className="hidden lg:flex flex-col items-end">
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
        <div className="lg:hidden">
          <div className={Styles.bar}>
            <input type="checkbox" id="check" />
            <span className="top" />
            <span className="middle" />
            <span className="bottom" />
          </div>
        </div>
      </div>
    </nav>
    {children}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#808291" fillOpacity="1" d="M0,224L40,197.3C80,171,160,117,240,80C320,43,400,21,480,53.3C560,85,640,171,720,176C800,181,880,107,960,112C1040,117,1120,203,1200,229.3C1280,256,1360,224,1400,208L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z" /></svg>
    <footer className="bg-[#808291] mt-[-1px]">
      <FooterFeature />
    </footer>
  </>
);

export default DefaultTemplateUi;
