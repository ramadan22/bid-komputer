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
  <section>
    {children}
  </section>
);

export default LoginLayout;
