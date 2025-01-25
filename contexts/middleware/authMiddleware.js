// middleware/authMiddleware.js
import { NextResponse } from "next/server";
import Cookies from "js-cookie";

export function middleware(req) {
  const token = Cookies.get("auth_token");

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"], // Protect routes under `/dashboard`
};
