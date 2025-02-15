// src/components/Task.jsx
import { Checkbox, IconButton, Typography } from "@mui/material";
import PropTypes from "prop-types";
import DeleteIcon from "@mui/icons-material/Delete";
import { useStyles } from "../styles/todoStyles";

export const Task = ({ task, onToggle, onDelete }) => {
  const classes = useStyles();

  return (
    <div className={classes.task}>
      <Checkbox
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        color="primary"
      />
      <Typography
        className={`${classes.taskText} ${
          task.completed ? classes.taskCompleted : ""
        }`}
      >
        {task.title}
      </Typography>
      <IconButton onClick={() => onDelete(task.id)} size="small" color="error">
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
