import { getToken } from 'next-auth/jwt';
import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  async (req) => {
    const userAuth = await getToken({ req });

    const isAuth = !!userAuth;

    const isAuthPage = req.nextUrl.pathname === '/dashboard/login';

    if (!isAuth && !isAuthPage) {
      let from = req.nextUrl.pathname;

      if (req.nextUrl.search) {
        from += req.nextUrl.search;
      }

      return NextResponse.redirect(
        new URL(`/dashboard/login?from=${encodeURIComponent(from)}`, req.url),
      );
    }

    if (isAuthPage && isAuth) {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }

    const newHeaders = new Headers(req.headers);
    newHeaders.set('x-pathname', req.nextUrl.pathname);

    return NextResponse.next({
      request: {
        headers: newHeaders
      },
    });
  },
  {
    callbacks: {
      async authorized() {
        // This is a work-around for handling redirect on auth pages.
        // We return true here so that the middleware function above
        // is always called.
        return true;
      },
    },
  },
);

export const config = {
  matcher: [
    // '/dashboard/((?!api|_next/static|_next/image|favicon.ico).*)',
    // '/dashboard/products',
    '/dashboard/:path*',
    '/dashboard/login',
  ],
};
