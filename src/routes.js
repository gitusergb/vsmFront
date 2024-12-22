import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import UploadVideo from './components/Videos/UploadVideo';
import VideoList from './components/Videos/VideoList';
import VideoPlayer from './components/Videos/VideoPlayer';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
    <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/videos/upload" element={<UploadVideo />} />
      <Route path="/videos" element={<VideoList />} />
      <Route path="/video-player" element={<VideoPlayer />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
