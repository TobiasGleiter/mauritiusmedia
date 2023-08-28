import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(request) {
    //console.log(request.nextauth);
    if (
      request.nextUrl.pathname === '/admin-dashboard' &&
      request.nextauth.token?.role !== 'admin'
    ) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  },
  {
    callbacks: {
      authorized: (params) => {
        let { token } = params;
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/admin-dashboard/:path*',
    '/equipment/:path*',
    //'/api/equipment/:path*',
    '/auth/new-user',
  ],
};
