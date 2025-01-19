import api from "./axiosInstance";

class AuthService {
  async login (credentials) {
    try {
      const response = await api.post('login', credentials);
      return response;
    } catch (error) {
      console.error('Login failed', error);
      throw new Error('Login failed');
    }
  };

  async getUser () {
    try {
      const response = await api.get('user');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch user data', error);
      throw new Error('Failed to fetch user data');
    }
  };

  async logout () {
    localStorage.removeItem('token');
  };
}
export const authService = new AuthService