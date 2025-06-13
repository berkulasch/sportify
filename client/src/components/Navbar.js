import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => (
  <nav className="bg-white shadow-md sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <Link to= "/" className="text-2xl font-bold text-blue-600">Sportify</Link>
      <div className="hidden md:flex space-x-6 text-gray-600 font-medium">
        <Link to="/" className="hover:text-blue-500">Home</Link>
        <Link to="/explore" className="hover:text-blue-500">Explore</Link>
        <Link to="/bookings" className="hover:text-blue-500">My Bookings</Link>
        <Link to= "/about" className="hover:text-blue-500">About</Link>
      </div>
      <div className="space-x-4">
        <Link to="/login" className="text-gray-600 hover:text-blue-500">Login</Link>
        <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
          Sign Up
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
