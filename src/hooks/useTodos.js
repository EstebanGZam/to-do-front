// src/hooks/useTodos.js
import { useState, useEffect } from "react";
import { todoApi } from "../api/todoApi";

export const useTodos = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const data = await todoApi.getAllTasks();
      setTasks(data);
    } catch (err) {
      setError(`Error fetching tasks: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (newTask) => {
    try {
      const data = await todoApi.createTask(newTask);
      setTasks([...tasks, data]);
      return data;
    } catch (err) {
      setError(`Error adding task: ${err.message}`);
      throw err;
    }
  };

  const toggleTask = async (taskId) => {
    try {
      const task = tasks.find((t) => t.id === taskId);
      const updatedTask = await todoApi.updateTask(taskId, {
        ...task,
        completed: !task.completed,
      });
      setTasks(tasks.map((t) => (t.id === taskId ? updatedTask : t)));
    } catch (err) {
      setError(`Error updating task: ${err.message}`);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await todoApi.deleteTask(taskId);
      setTasks(tasks.filter((t) => t.id !== taskId));
    } catch (err) {
      setError(`Error deleting task: ${err.message}`);
    }
  };

  const clearCompleted = async () => {
    try {
      await todoApi.clearCompleted();
      setTasks(tasks.filter((t) => !t.completed));
    } catch (err) {
      setError(`Error clearing completed tasks: ${err.message}`);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return {
    tasks,
    loading,
    error,
    addTask,
    toggleTask,
    deleteTask,
    clearCompleted,
  };
};
