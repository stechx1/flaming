import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:1339/api',
  // baseURL:'https://classic-chocolate-0495dd0cdb.strapiapp.com/api'
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Modify the request config here (e.g., add headers)
    // config.headers['Authorization'] = 'Bearer your_access_token';
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);