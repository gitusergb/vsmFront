import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login'; // Redirect to login page after logout
  };

  return (
    <nav  className="bg-transparent flex justify-around items-center">
      <div className="container mx-auto flex items-center justify-between px-4 py-1">
        <div className=" lg:flex space-x-4">
          <Link
            className="text-white hover:text-gray-400 px-3 py-1 rounded-md text-sm font-medium"
            to="/videos"
          >
            Videos
          </Link>
          <Link
            className="text-white hover:text-gray-400 px-3 py-1 rounded-md text-sm font-medium"
            to="/upload"
          >
            Upload Video
          </Link>
          <button
            className="bg-transparent text-white hover:bg-white px-3 py-1 rounded-md text-sm font-medium"
            onClick={handleLogout}
          >
            SignOut
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
