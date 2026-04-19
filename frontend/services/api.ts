import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle token refresh on 401
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;

// Auth API
export const authAPI = {
  signup: (data: { email: string; password: string; name: string }) =>
    api.post('/auth/signup', data),
  login: (data: { email: string; password: string }) =>
    api.post('/auth/login', data),
  logout: () => api.post('/auth/logout'),
};

// User API
export const userAPI = {
  getProfile: () => api.get('/users/profile'),
  updateProfile: (data: any) => api.put('/users/profile', data),
  getAppointments: () => api.get('/users/appointments'),
};

// Appointment API
export const appointmentAPI = {
  getAvailableSlots: (params: any) => api.get('/appointments/slots', { params }),
  create: (data: any) => api.post('/appointments', data),
  getById: (id: string) => api.get(`/appointments/${id}`),
  update: (id: string, data: any) => api.put(`/appointments/${id}`, data),
  cancel: (id: string) => api.delete(`/appointments/${id}`),
};

// Admin API
export const adminAPI = {
  getDashboard: () => api.get('/admin/dashboard'),
  getAppointments: () => api.get('/admin/appointments'),
  getOffers: () => api.get('/admin/offers'),
  createOffer: (data: any) => api.post('/admin/offers', data),
  updateOffer: (id: string, data: any) => api.put(`/admin/offers/${id}`, data),
  deleteOffer: (id: string) => api.delete(`/admin/offers/${id}`),
  manageSlots: (data: any) => api.post('/admin/slots', data),
};