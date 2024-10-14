import React from "react";

const TaskItem = ({ task, deleteTask, updateTask }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded mb-2">
      <h3 className="text-lg font-bold">{task.title}</h3>
      <p>{task.description}</p>
      <p className="text-sm">Status: {task.status}</p>
      <p className="text-sm">Priority: {task.priority}</p>
      <button
        onClick={() => deleteTask(task.id)}
        className="bg-red-500 text-white py-1 px-2 rounded mr-2"
      >
        Delete
      </button>
      <button
        onClick={() => updateTask(task.id)}
        className="bg-yellow-500 text-white py-1 px-2 rounded"
      >
        Update
      </button>
    </div>
  );
};

export default TaskItem;
