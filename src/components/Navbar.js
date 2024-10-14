import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <Link to="/" className="text-xl">
        Team Collaboration Hub
      </Link>
      <div>
        {user ? (
          <>
            <span>{user.name}</span>
            <button
              onClick={logout}
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
