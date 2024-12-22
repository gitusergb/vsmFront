import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import VideoList from './components/Videos/VideoList';
import UploadVideo from './components/Videos/UploadVideo';
import VideoPlayer from './components/Videos/VideoPlayer';
import { jwtDecode } from 'jwt-decode';


// Helper function to check if the user is authenticated
const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  if (token) {
    try {
      const decoded = jwtDecode(token);
      return decoded.exp > Date.now() / 1000; // Check token expiration
    } catch (err) {
      console.error('Invalid token:', err);
      return false;
    }
  }
  return false;
};


// Protected Route Component
const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Private Routes with Navbar */}
          <Route
            path="/videos"
            element={
              <PrivateRoute>
                <>
                  <VideoList />
                </>
              </PrivateRoute>
            }
          />
          <Route
            path="/video-player"
            element={
              <PrivateRoute>
                <>
                  <VideoPlayer />
                </>
              </PrivateRoute>
            }
          />
          <Route
            path="/upload"
            element={
              <PrivateRoute>
                <>
                  <UploadVideo />
                </>
              </PrivateRoute>
            }
          />

          {/* Default Route */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
