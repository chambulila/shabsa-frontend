import Cookies from "js-cookie";

const baseURL = 'http://localhost:8000/api'; // Laravel backend URL

// Helper function to add Authorization header
const getAuthHeader = () => {
  const token = Cookies.get('auth_token');
  if (token) {
    return { Authorization: `Bearer ${token}` };
  }
  return {};
};

// Fetch wrapper for making API requests
const apiFetch = async (url, options = {}) => {
  const headers = {
    ...options.headers,
    ...getAuthHeader(),
  };

  const response = await fetch(`${baseURL}${url}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
};

export default apiFetch;