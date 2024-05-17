import type { Metadata } from 'next';

import '@/assets/styes/globals.scss';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login',
  robots: {
    index: false,
    follow: false,
  },
};

export const LoginLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body>
      {children}
    </body>
  </html>
);

export default LoginLayout;
