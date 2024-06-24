import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const HOME_PAGE_URL = "/";
export function middleware(request: NextRequest) {
    return NextResponse.next()
  }

export const config = {
    matcher: [
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
    //   '/((?!api|_next/static|_next/image|favicon.ico|.+?/hook-examples|.+?/menu-examples|images|next.svg|vercel.svg).*)'
    ]
  }
