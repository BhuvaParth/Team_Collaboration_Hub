import React, { useState } from 'react';
import { useTasks } from '../Tasks/TaskProvider';
import { useNavigate } from 'react-router-dom'; 

export default function UserDashboard() {
  const { tasks, deleteTask } = useTasks(); 
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(''); 

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredTasks = tasks.filter((task) => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    return (
      task.title.toLowerCase().includes(lowerCaseQuery) ||
      task.description.toLowerCase().includes(lowerCaseQuery) ||
      task.status.toLowerCase().includes(lowerCaseQuery) ||
      task.priority.toLowerCase().includes(lowerCaseQuery)
    );
  });

  const handleDelete = (taskId) => {
    deleteTask(taskId);
  };

  const handleEdit = (task) => {
    navigate('/edit-task', { state: { task } });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">User Dashboard</h2>
      <input
        type="text"
        placeholder="Search tasks by title, description, status, or priority..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="border p-2 mb-4 w-full"
      />
      {filteredTasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-300 text-center">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border">Title</th>
              <th className="py-2 px-4 border">Description</th>
              <th className="py-2 px-4 border">Due Date</th>
              <th className="py-2 px-4 border">Status</th>
              <th className="py-2 px-4 border">Priority</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map((task) => (
              <tr key={task.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border">{task.title}</td>
                <td className="py-2 px-4 border">{task.description}</td>
                <td className="py-2 px-4 border">{task.dueDate}</td>
                <td className="py-2 px-4 border">{task.status}</td>
                <td className="py-2 px-4 border">{task.priority}</td>
                <td className="py-2 px-4 border">
                  <button
                    onClick={() => handleEdit(task)}
                    className="text-blue-500 hover:underline mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
