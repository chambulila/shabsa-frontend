"use client"
import { authService } from '@/utils/authService';
import { redirect } from 'next/navigation';
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const localUser = "localStorage.getItem('user')";
  const [user, setUser] = useState(null);
  // const localToken = localStorage.getItem('token');

  const login = async (credentials) => {
    if (localToken) {
      redirect('/dashboard');
    } else {
      const response = await authService.login(credentials)
      // localStorage.setItem('token', response.data?.token);
      setUser(response?.data?.user);
    }
  };

  const logout = () => {
    // localStorage.removeItem('token');
    // localStorage.removeItem('user');
    setUser(null);
    redirect('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
