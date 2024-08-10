// src/services/api.js
import axios from 'axios';

// For local development, we'll always use the local API URL
const apiUrl = import.meta.env.VITE_API_URL || '/api';
console.log('API URL:', apiUrl);


const api = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Response interceptor
api.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (error.response && error.response.status === 401) {
    // Handle unauthorized access (e.g., redirect to login)
    // window.location.href = '/login';
  }
  return Promise.reject(error);
});

// API methods
// export const authAPI = {
//   login: (credentials) => api.post('/auth/login', credentials),
//   register: (userData) => api.post('/auth/register', userData),
//   logout: () => api.post('/auth/logout'),
// };

// export const userAPI = {
//   getCurrentUser: () => api.get('/users/me'),
//   updateProfile: (userData) => api.put('/users/me', userData),
// };

// export const eventsAPI = {
//   getEvents: () => api.get('/events'),
//   getEvent: (id) => api.get(`/events/${id}`),
//   createEvent: (eventData) => api.post('/events', eventData),
//   updateEvent: (id, eventData) => api.put(`/events/${id}`, eventData),
//   deleteEvent: (id) => api.delete(`/events/${id}`),
// };

// export const favoritesAPI = {
//   getFavorites: () => api.get('/favorites'),
//   addFavorite: (eventId) => api.post('/favorites', { eventId }),
//   removeFavorite: (eventId) => api.delete(`/favorites/${eventId}`),
// };

export default api;