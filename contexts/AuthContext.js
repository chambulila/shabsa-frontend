"use client";
import { authService } from '@/utils/authService';
import { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const localToken = Cookies.get("auth_token");
  const login = async (credentials) => {
    if (localToken) {
      router.push('/dashboard'); // Redirect to dashboard if token exists
    } else {
      try {
        const response = await authService.login(credentials);
        if (response?.data?.token) {
          console.log(response?.data?.token)
          // Store the auth_token in cookies
          Cookies.set("auth_token", response.data.token, {
            expires: 7, // 7 days
            secure: process.env.NODE_ENV === "production",
            sameSite: "Strict",
          });
          router.push('/dashboard'); // Redirect after successful login
        }
      } catch (error) {
        console.log("Login failed", error);
      }
    }
  };

  // if (loading) {
  //   return "null"; // Optionally render a loading spinner while checking authentication
  // }

  return (
    <AuthContext.Provider value={{ login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
