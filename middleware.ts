import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';
import { hasRequiredPermissions } from './lib/rbac/base';

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(request) {
    const { pathname } = request.nextUrl;

    // Equipment
    if (
      (pathname.includes('/equipment/create') ||
        pathname.includes('/equipment/edit')) &&
      !hasRequiredPermissions(request.nextauth.token?.role as string, [
        'technician',
        'admin',
      ])
    ) {
      return NextResponse.redirect(new URL('/equipment', request.url));
    }

    // Sunday-Service
    if (
      (pathname.includes('/sunday-service/create') ||
        pathname.includes('/sunday-service/edit')) &&
      !hasRequiredPermissions(request.nextauth.token?.role as string, [
        'guest',
        'technician',
        'admin',
      ])
    ) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    // Users
    if (
      pathname.includes('/users') &&
      !hasRequiredPermissions(request.nextauth.token?.role as string, ['admin'])
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
    '/users',
    '/auth/new-user',
  ],
};
