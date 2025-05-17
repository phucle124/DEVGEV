import axios from 'axios';
import API_ENDPOINTS from '../config';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to add the auth token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const authService = {
  login: (credentials) => api.post(API_ENDPOINTS.AUTH.LOGIN, credentials),
  register: (userData) => api.post(API_ENDPOINTS.AUTH.REGISTER, userData),
};

export const userService = {
  getProfile: () => api.get(API_ENDPOINTS.USERS.PROFILE),
  updateProfile: (userData) => api.put(API_ENDPOINTS.USERS.UPDATE, userData),
};

export const courseService = {
  getCourses: () => api.get(API_ENDPOINTS.COURSES.LIST),
  getCourse: (id) => api.get(API_ENDPOINTS.COURSES.DETAIL(id)),
};

export const examService = {
  getExams: () => api.get(API_ENDPOINTS.EXAMS.LIST),
  getExam: (id) => api.get(API_ENDPOINTS.EXAMS.DETAIL(id)),
};

export default api; 