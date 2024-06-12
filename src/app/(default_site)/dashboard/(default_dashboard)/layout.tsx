import type { Metadata } from 'next';
import 'react-toastify/dist/ReactToastify.css';

import NextAuthProvider from '@/lib/providers/nextAuthProvider';
import ReactQueryProvider from '@/lib/providers/reactQueryProvider';
import { ToastifyProvider } from '@/lib/providers/reactToastify';
import NavbarUI from '@/ui/dashboard/navbar';
import SidebarUI from '@/ui/dashboard/sidebar';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard',
  robots: {
    index: false,
    follow: false,
  },
};

export const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <section>
    <NextAuthProvider>
      <ReactQueryProvider>
        <ToastifyProvider>
          <div className="flex flex-wrap">
            <div className="basis-1/6 grow h-screen">
              <SidebarUI />
            </div>
            <div className="basis-5/6 grow flex flex-col">
              <NavbarUI />
              <div className="flex-1 relative">
                {children}
              </div>
            </div>
          </div>
        </ToastifyProvider>
      </ReactQueryProvider>
    </NextAuthProvider>
  </section>
);

export default RootLayout;
