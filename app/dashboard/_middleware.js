import axiosInstance from '@/utils/axiosInstance';
import { NextResponse } from 'next/server';

export async function middleware(req) {
  const token = req.cookies['XSRF-TOKEN']; // Adjust to match your cookie name

  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  try {
    await axiosInstance.get('/user');
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
}
