import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import TaskCard from "../components/TaskCard";
import FilterBar from "../components/FilterBar";
import { useTasks } from "../context/useTasks";

function Tasks() {
  const navigate = useNavigate();

  const { tasks, deleteTask, updateTask } = useTasks();

  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");

  const handleEdit = (id) => {
    navigate(`/tasks/${id}/edit`);
  };

  const handleDelete = (id) => {
    deleteTask(id);
  };
  const handleToggleComplete = (task) => {
    updateTask({
      ...task,
      completed: !task.completed,
    });
  };

  const filteredTasks = tasks.filter((task) => {
    const categoryMatch = category === "All" || task.category === category;

    const statusMatch =
      status === "All" ||
      (status === "Completed" && task.completed) ||
      (status === "Pending" && !task.completed);

    return categoryMatch && statusMatch;
  });

  const taskListRef = useRef(null);
  const [taskListHeight, setTaskListHeight] = useState(0);

  useEffect(() => {
    if (taskListRef.current) {
      setTaskListHeight(taskListRef.current.offsetHeight);
    }
  }, [filteredTasks]);

  return (
    <section className="relative">
      <div
        className="w-230 absolute left-45"
        style={{ height: `${400 + (tasks.length - 4) * 160}px` }}
      >
        <div className="flex justify-between gap-150 items-center absolute top-5">
          <h1 className="font-main font-medium text-electric-black text-4xl text-nowrap leading-none tracking-normal">
            My Tasks
          </h1>
          <Link to="/tasks/new">
            <p className="text-magenta absolute left-190 top-0 font-main text-2xl text-nowrap  font-medium">
              + Add New Task
            </p>
          </Link>
        </div>

        <FilterBar
          category={category}
          status={status}
          onCategoryChange={setCategory}
          onStatusChange={setStatus}
        />

        <div ref={taskListRef} className="flex flex-col gap-20 absolute top-30">
          {filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onToggleComplete={handleToggleComplete}
            />
          ))}
        </div>

        <div
          className="absolute left-100 text-center"
          style={{ top: `${30 + taskListHeight + 100}px` }}
        >
          <a href="#top">
            <p className="text-magenta text-2xl leading-none tracking-normal border-b border-magenta">
              Back To Top
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Tasks;
