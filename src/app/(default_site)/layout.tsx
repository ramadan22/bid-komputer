import type { Metadata } from 'next';

import '@/assets/styes/globals.scss';

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
    <body suppressHydrationWarning>
      {children}
    </body>
  </html>
);

export default RootLayout;
