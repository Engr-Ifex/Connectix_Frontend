import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3700/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

// List of endpoints that don't require authentication
const publicEndpoints = ['/auth/initial', '/auth/verify-email-code'];

api.interceptors.request.use((config) => {
  // Check if the request URL is in the list of public endpoints
  const isPublicEndpoint = publicEndpoints.some(endpoint => config.url.includes(endpoint));
  
  if (!isPublicEndpoint) {
    const token = localStorage.getItem('token');
    console.log("Token being sent:", token);
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// ... rest of your code ...

export default api;