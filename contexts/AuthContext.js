"use client"
import { authService } from '@/utils/authService';
import { redirect } from 'next/navigation';
import { createContext, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const localToken = localStorage.getItem('auth_token');

  const login = async (credentials) => {
    if (localToken) {
      redirect('/dashboard');
    } else {
      const response = await authService.login(credentials)
      localStorage.setItem('auth_token', response?.data?.token);
      if(response?.data?.token) {
        redirect('/dashboard');
      }
    }
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    redirect('/login');
  };

  return (
    <AuthContext.Provider value={{ login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
