import React from "react";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import UserDashboard from "./components/Dashboard/UserDashboard";
import PrivateRoute from "./components/PrivateRoute";
import TaskForm from "./components/Tasks/TaskForm";
import { TaskProvider } from "./components/Tasks/TaskProvider";
import Edittask from "./components/Tasks/Edittask";

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Navbar />
      )}
      <div className="container mx-auto p-4">
        <TaskProvider>
          <Routes>
            <Route path="/" element={<UserDashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/taskform" element={<TaskForm />} />
            <Route path="/edit-task" element={<Edittask />} />
          </Routes>
        </TaskProvider>
      </div>
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
