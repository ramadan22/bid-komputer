'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Label from '@/components/label';
import { sidebarMenu } from '@/data/sidebarMenu';
import { cn } from '@/lib/classnames';
import Styles from './style.module.scss';

const SidebarUI = () => {
  const pathname = usePathname();

  return (
    <div className={Styles.sidebar}>
      <div>
        <div className={Styles.badge}>B</div>
        <Label>Bid Komputer</Label>
      </div>
      <div>
        {sidebarMenu.map((group) => (
          <div key={group.slug}>
            <Label>{group.text}</Label>
            <ul>
              {group.list.map((menu) => (
                <li key={menu.slug}>
                  <Link
                    href={menu.href}
                    className={cn(
                      menu.href.includes(pathname) && 'bg-[#e4e7f4] !text-[#5a6acf]',
                    )}
                  >
                    {menu.icon}
                    {menu.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarUI;
