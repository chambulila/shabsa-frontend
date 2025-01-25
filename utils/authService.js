import Cookies from "js-cookie";
import api from "./axiosInstance";
import { redirect } from "next/navigation";

class AuthService {
  async login (credentials) {
    try {
      const response = await api.post('login', credentials);
      return response;
    } catch (error) {
      console.log('Login failed', error);
      throw new Error('Login failed');
    }
  };

  async getUser () {
    try {
      const response = await api.get('user');
      return response.data;
    } catch (error) {
      console.log('Failed to fetch user data', error);
      throw new Error('Failed to fetch user data');
    }
  };

  async logout() {
    try {
     const response = await api.post("logout"); // Invalidate the session on the backend
      // if(response?.data?.status == 200){
        Cookies.remove("auth_token");
        redirect('/login');
      // }
      return response;
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }
}
export const authService = new AuthService