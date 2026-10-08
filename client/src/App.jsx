// App.jsx
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import NewTask from "./pages/NewTask";
import EditTask from "./pages/EditTask";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/task/taskForm" element={<TaskForm />} />
        <Route path="/tasks/new" element={<NewTask />} />
        <Route path="/tasks/:id/edit" element={<EditTask />} />
      </Routes>
    </>
  );
}

export default App;
