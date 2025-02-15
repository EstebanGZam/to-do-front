// src/App.jsx
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { TodoApp } from "./components/TodoApp";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff9800", // Orange color
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TodoApp />
    </ThemeProvider>
  );
}

export default App;
