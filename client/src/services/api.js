import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3700/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  console.log("Token being sent:", token);

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
    console.log("Token:", localStorage.getItem('token'));
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});


api.interceptors.response.use((response) => {
  return response;
}, async (error) => {
  const originalRequest = error.config;
  if (error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    try {
      // Implement your token refresh logic here
      const newToken = await refreshToken();
      localStorage.setItem('token', newToken);
      originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
      return api(originalRequest);
    } catch (refreshError) {
      // Handle refresh failure (e.g., redirect to login)
      return Promise.reject(refreshError);
    }
  }
  return Promise.reject(error);
});

export default api;






// export const authAPI = {
//   login: (credentials) => api.post('/auth/login', credentials),
//   register: (userData) => api.post('/auth/user-register', userData),
//   resetpassword: (userData) => api.post('/auth/change-password', userData),

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

