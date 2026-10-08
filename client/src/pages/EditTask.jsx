import { useParams } from "react-router-dom";
import ArrowLeft from "../assets/arrow-left.png";
import TaskForm from "../components/TaskForm";
import { useTasks } from "../context/useTasks";

export default function EditTask() {
  const { id } = useParams();
  const { tasks, updateTask } = useTasks();

  const task = tasks.find((task) => task.id === Number(id));

  return (
    <section className="relative bg-white">
      <div className="h-250">
        <div className="flex items-center gap-5 absolute left-35 top-25">
          <img className="w-4.25 h-8.75" src={ArrowLeft} alt="" />

          <h1 className="font-main font-medium text-5xl">Edit Task</h1>
        </div>

        <TaskForm task={task} onUpdateTask={updateTask} />
      </div>
    </section>
  );
}
