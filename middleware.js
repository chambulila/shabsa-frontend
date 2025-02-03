// middleware.js
import { NextResponse } from 'next/server';
import Cookies from 'js-cookie';

export function middleware(request) {
  // Get the token from cookies
  const token = request.cookies.get('auth_token')?.value;

  // Define protected routes
  const protectedRoutes = ['/dashboard'];

  // Check if the current route is protected
  const isProtectedRoute = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  // If the route is protected and the token is missing or invalid, redirect to login
  if (isProtectedRoute && !token) {
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  // If the user is logged in and tries to access the login page, redirect to dashboard
  if (token && request.nextUrl.pathname === '/login') {
    const dashboardUrl = new URL('/dashboard', request.url);
    return NextResponse.redirect(dashboardUrl);
  }

  // Allow the request to proceed
  return NextResponse.next();
}

// Specify the routes the middleware should run on
export const config = {
  matcher: ['/dashboard/:path*', '/login'],
};