import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  console.log("Hello");
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
