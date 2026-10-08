import { useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import ArrowLeft from "../assets/arrow-left.png";
import { useTasks } from "../context/useTasks";

export default function NewTask() {
  const navigate = useNavigate();
  const { addTask } = useTasks();

  const handleAddTask = (newTask) => {
    addTask(newTask);
    navigate("/tasks");
  };

  return (
    <section className="bg-off-white">
      <div className="h-270">
        <div className="flex items-center gap-8 absolute left-35 top-45">
          <img className="w-4.25 h-8.75" src={ArrowLeft} alt="" />
          <h1 className="font-main font-medium text-5xl">New Task</h1>
        </div>

        <TaskForm onAddTask={handleAddTask} />
      </div>
    </section>
  );
}
