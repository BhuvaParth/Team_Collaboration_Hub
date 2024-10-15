import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate(); 

  const handleLogout = () => {
    logout(); 
    navigate("/login"); 
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <Link to="/" className="text-xl">
        Team Collaboration Hub
      </Link>
      <div>
        {user ? (
          <>
            <Link
              to="/taskform"
              className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded"
            >
              TaskForm
            </Link>
            <button
              onClick={handleLogout} 
              className="ml-4 bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
