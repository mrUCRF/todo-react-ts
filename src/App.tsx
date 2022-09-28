import "./App.css";
import { TodoApp } from "./ features/TodoApp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./ features/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoApp />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
