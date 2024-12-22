import axios from 'axios';

const API = axios.create({
  baseURL: 'https://vsm-owg3.onrender.com/api', // Replace with backend URL
  // baseURL: 'http://localhost:5000/api'
});

// Add token to requests if user is logged in
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export const registerUser = (data) => API.post('/auth/register', data);
export const loginUser = (data) => API.post('/auth/login', data);
export const uploadVideo = (data) => API.post('/videos/upload', data);
export const getVideos = (params) => API.get('/videos', { params });

