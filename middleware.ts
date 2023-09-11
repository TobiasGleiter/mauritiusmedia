import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';
import { hasRequiredPermissions } from './lib/rbac/base';

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(request) {
    const { pathname } = request.nextUrl;

    if (
      (pathname.includes('/equipment/create') ||
        pathname.includes('/equipment/edit')) &&
      !hasRequiredPermissions(request.nextauth.token?.role as string, [
        'technician',
        'admin',
        'dev',
      ])
    ) {
      return NextResponse.redirect(new URL('/equipment', request.url));
    }

    if (
      (pathname.includes('/sunday-service/create') ||
        pathname.includes('/sunday-service/edit')) &&
      !hasRequiredPermissions(request.nextauth.token?.role as string, [
        'technician',
        'admin',
        'dev',
      ])
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
    '/api/dashboard/:path*',
    '/equipment/:path*',
    '/api/equipment/:path*', // comment out for postman
    '/sunday-service/:path*',
    '/api/sunday-service/:path*',
    '/auth/new-user',
  ],
};
