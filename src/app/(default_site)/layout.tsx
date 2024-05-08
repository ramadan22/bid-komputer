import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/assets/styes/globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nextjs Boilerplate',
  description: 'Nextjs Boilerplate',
};

export const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body className={inter.className}>
      {children}
    </body>
  </html>
);

export default RootLayout;