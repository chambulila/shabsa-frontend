import axios from 'axios';
import Cookies from "js-cookie";
const api = axios.create({
  baseURL: `https://shabsa.eportsolutions.co.tz/api`,
  //  baseURL: 'http://localhost:8000/api', // Laravel backend URL
  //  baseURL: 'http://api.shabsa.co.tz/api', // Laravel backend URL
//   headers: {
//     'Content-Type': 'application/json',  
// },
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
