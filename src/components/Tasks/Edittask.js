import React, { useState } from 'react'; 
import { useLocation, useNavigate } from 'react-router-dom';
import { useTasks } from './TaskProvider'; 

export default function Edittask() {
  const location = useLocation();
  const navigate = useNavigate();
  const { task } = location.state || {};
  const { updateTask } = useTasks();
  const [formData, setFormData] = useState({
    title: task.title,
    description: task.description,
    dueDate: task.dueDate,
    status: task.status,
    priority: task.priority,
  });  

  if (!task) {
    return <div>No task found for editing.</div>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    updateTask(task.id, formData); 

    navigate('/');
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-2">Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-2">Status</label>
          <input
            type="text"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-2">Priority</label>
          <input
            type="text"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 mt-4">
          Update Task
        </button>
      </form>
    </div>
  );
}
