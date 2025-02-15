// src/styles/todoStyles.js
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    margin: "2rem auto",
    padding: theme.spacing(2),
  },
  header: {
    textAlign: "center",
    marginBottom: theme.spacing(4),
  },
  todoText: {
    color: theme.palette.grey[600],
    "& span": {
      color: theme.palette.primary.main,
    },
  },
  inputContainer: {
    display: "flex",
    gap: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
  input: {
    flex: 1,
  },
  taskList: {
    marginTop: theme.spacing(2),
  },
  task: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1),
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  taskCompleted: {
    textDecoration: "line-through",
    color: theme.palette.text.disabled,
  },
  taskText: {
    flex: 1,
    marginLeft: theme.spacing(2),
  },
  clearButton: {
    marginTop: theme.spacing(2),
    color: theme.palette.primary.main,
  },
}));
