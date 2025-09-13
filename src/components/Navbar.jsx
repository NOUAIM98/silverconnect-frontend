import React from "react";
import { Link } from "react-router-dom";

function Navbar({ onLoginClick }) {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold">SilverConnect</span>
        </div>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/stories" className="hover:text-gray-300">Stories</Link>
          <Link to="/events" className="hover:text-gray-300">Events</Link>
          <Link to="/chat" className="hover:text-gray-300">Chat</Link>
          <Link to="/profile" className="hover:text-gray-300">Profile</Link>
          <button
            onClick={onLoginClick}
            className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
