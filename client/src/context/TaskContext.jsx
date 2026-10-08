import { useState } from "react";
import { TaskContext } from "./TaskContext";

import { tasks as initialTasks } from "../data/tasks";

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(initialTasks);

  const updateTask = (updatedTask) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task,
      ),
    );
  };

  const deleteTask = (id) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  };

  const addTask = (newTask) => {
    setTasks((currentTasks) => [...currentTasks, newTask]);
  };

  return (
    <TaskContext.Provider value={{ tasks, updateTask, deleteTask, addTask }}>
      {children}
    </TaskContext.Provider>
  );
}
