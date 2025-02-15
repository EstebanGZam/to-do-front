// src/api/todoApi.js
const API_BASE_URL = "http://localhost:8000";

export const todoApi = {
  async getAllTasks() {
    try {
      const response = await fetch(`${API_BASE_URL}/tasks`);
      return await response.json();
    } catch (error) {
      console.error("Error fetching tasks:", error);
      throw error;
    }
  },

  async createTask(task) {
    try {
      const response = await fetch(`${API_BASE_URL}/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
      return await response.json();
    } catch (error) {
      console.error("Error creating task:", error);
      throw error;
    }
  },

  async updateTask(taskId, updatedTask) {
    try {
      const response = await fetch(`${API_BASE_URL}/tasks/${taskId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTask),
      });
      return await response.json();
    } catch (error) {
      console.error("Error updating task:", error);
      throw error;
    }
  },

  async deleteTask(taskId) {
    try {
      await fetch(`${API_BASE_URL}/tasks/${taskId}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error("Error deleting task:", error);
      throw error;
    }
  },

  async clearCompleted() {
    try {
      await fetch(`${API_BASE_URL}/tasks/clear-completed`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error("Error clearing completed tasks:", error);
      throw error;
    }
  },
};
