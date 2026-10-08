import EditLogo from "../assets/edit.png";
import DeleteLogo from "../assets/delete.png";

function TaskCard({ task, onEdit, onDelete, onToggleComplete }) {
  const categoryClass =
    task.category === "Urgent" ? "text-lightcoral" : "text-aurora-green";

  const gapClass = task.category === "Urgent" ? "gap-155" : "gap-150";

  return (
    <section className="relative">
      <div className="w-230 h-70 mx-auto border border-navvy rounded-xl">
        <div
          className={`flex absolute top-5 left-2.5 ${gapClass} justify-between items-center mb-2`}
        >
          <span className={`text-xl font-medium ${categoryClass}`}>
            {task.category}
          </span>
          <div className="flex gap-8">
            <div className="flex items-center justify-center bg-magenta text-white text-sm w-20 h-9 rounded-md">
              <img className="w-5 h-5" src={EditLogo} alt="" />
              <button className="text-lg" onClick={() => onEdit(task.id)}>
                Edit
              </button>
            </div>
            <div className="flex gap-1 items-center justify-center border border-magenta text-magenta text-sm w-23 h-9 rounded-md">
              <img className="w-4 h-4" src={DeleteLogo} alt="" />
              <button className="text-lg" onClick={() => onDelete(task.id)}>
                Delete
              </button>
            </div>
          </div>
        </div>

        <div
          className="absolute w-221 left-2.5 top-20
         border border-navvy"
        ></div>

        <div className="absolute top-25 left-2.5">
          <h3 className="font-main font-normal text-4xl text-electric-black leading-15 tracking-normal">
            {task.title}
          </h3>
          <p className="text-dimgray w-225 text-xl">{task.description}</p>
          <button
            onClick={() => onToggleComplete(task)}
            className="mt-5 text-lg text-magenta"
          >
            {task.completed ? "Mark as Pending" : "Mark as Completed"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default TaskCard;
