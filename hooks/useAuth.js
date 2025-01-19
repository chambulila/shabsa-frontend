import { getUser } from '@/utils/authService';
import { useEffect, useState } from 'react';

export const useAuth = (redirectTo = '/login') => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser();
        setUser(userData);
      } catch (error) {
        window.location.href = redirectTo;
      }
    };

    fetchUser();
  }, [redirectTo]);

  return user;
};
