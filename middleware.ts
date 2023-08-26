export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/dashboard/:path*', '/equipment/:path*', '/auth/new-user'],
};
