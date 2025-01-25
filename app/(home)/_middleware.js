import axiosInstance from '@/utils/axiosInstance';
import Cookies from 'js-cookie';
import { NextResponse } from 'next/server';

export async function middleware(req) {
  // const token = req.cookies['XSRF-TOKEN']; // Adjust to match your cookie name
  const token = Cookies.get("auth_token");

  if (token) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

    return NextResponse.next();
}
