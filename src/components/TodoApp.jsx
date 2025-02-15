// src/components/TodoApp.jsx
import { useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Tabs,
  Tab,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useStyles } from "../styles/todoStyles";
import { useTodos } from "../hooks/useTodos";
import { Task } from "./Task";

export const TodoApp = () => {
  const classes = useStyles();
  const [newTask, setNewTask] = useState("");
  const [activeTab, setActiveTab] = useState("personal");
  const {
    tasks,
    loading,
    error,
    addTask,
    toggleTask,
    deleteTask,
    clearCompleted,
  } = useTodos();

  const handleAddTask = async () => {
    if (!newTask.trim()) return;
    try {
      await addTask({
        title: newTask,
        type: activeTab,
        completed: false,
      });
      setNewTask("");
    } catch {
      // Error is handled by the hook
    }
  };

  if (loading) {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <div className={classes.header}>
          <Typography variant="h4" className={classes.todoText}>
            TO<span>DO</span>
          </Typography>
        </div>

        <Tabs
          value={activeTab}
          onChange={(_, newValue) => setActiveTab(newValue)}
          centered
          sx={{ mb: 3 }}
        >
          <Tab label="Personal" value="personal" />
          <Tab label="Professional" value="professional" />
        </Tabs>

        <div className={classes.inputContainer}>
          <TextField
            className={classes.input}
            placeholder="What do you need to do?"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleAddTask()}
            variant="outlined"
            size="small"
          />
          <Button variant="contained" color="primary" onClick={handleAddTask}>
            ADD
          </Button>
        </div>

        <div className={classes.taskList}>
          {tasks
            .filter((task) => task.type === activeTab)
            .map((task) => (
              <Task
                key={task.id}
                task={task}
                onToggle={toggleTask}
                onDelete={deleteTask}
              />
            ))}
        </div>

        {tasks.some((task) => task.completed && task.type === activeTab) && (
          <Button className={classes.clearButton} onClick={clearCompleted}>
            Clear Completed
          </Button>
        )}
      </CardContent>
    </Card>
  );
};
