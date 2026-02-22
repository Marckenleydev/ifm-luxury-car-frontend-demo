
import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL;




// Create axios instance
export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Token management
const getToken = () => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('accessToken');
};

const setToken = (token: string) => {

    localStorage.setItem('accessToken', token);
 
};

const clearTokens = () => {
  localStorage.removeItem('accessToken');
 
};

// Request interceptor to add token
api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If error is 401 and we haven't tried refreshing yet
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Try to refresh token
        const refreshResponse = await axios.get(`${API_URL}/api/auth/refresh-token`, {
          withCredentials: true,
        });

        const { accessToken } = refreshResponse.data;
        
        if (accessToken) {
          // Store the new token
         
          setToken(accessToken);
          
          // Update the Authorization header
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          
          // Retry the original request
          return api(originalRequest);
        }
      } catch (refreshError) {
        console.error('Token refresh failed:', refreshError);
        clearTokens();
       // Redirect to login
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

