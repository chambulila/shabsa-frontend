import axios from 'axios';
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: `http://5.189.168.118:9108/api`,
  //  'http://localhost:8000/api', // Laravel backend URL
  headers: {
    'Content-Type': 'application/json',
},
});

// Add Authorization header dynamically
api.interceptors.request.use((config) => {
  const token = Cookies.get('auth_token');
  console.log("tiken is: ", token)
  if (token) {
      config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
},
// (error) => {
//   return Promise.reject(error);
// }
);

export default api;
