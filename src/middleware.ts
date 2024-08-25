import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

const LOGIN_PAGE_URL = '/admin/login';
const ADMIN_PAGE_URL = '/admin';

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const { pathname } = request.nextUrl;

  // If the user is signed in and trying to access the login page
  if (pathname === LOGIN_PAGE_URL && token) {
    const url = new URL(ADMIN_PAGE_URL, request.url);
    return NextResponse.redirect(url);
  }

  // If the user is not signed in and trying to access an admin route
  if (!token && pathname.startsWith('/admin') && pathname !== LOGIN_PAGE_URL) {
    const url = new URL(LOGIN_PAGE_URL, request.url);
    url.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(url);
  }

  // Allow the request to proceed if authenticated or not accessing an admin route
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - all items inside the public folder
     *    - images (public images)
     *    - next.svg (Next.js logo)
     *    - vercel.svg (Vercel logo)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.+?/hook-examples|.+?/menu-examples|images|next.svg|vercel.svg).*)',
  ],
};
