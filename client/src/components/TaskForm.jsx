import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Arrow from "../assets/arrow_down.png";

export default function TaskForm({ task, onUpdateTask, onAddTask }) {
  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");
  const [dueDate, setDueDate] = useState(task?.dueDate || "");
  const [category, setCategory] = useState(task?.category || "");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState(
    task?.tags || ["Urgent", "Important"],
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check that all required fields are filled
    if (!title || !description || !dueDate || !category) {
      setError("Please fill in all fields.");
      return;
    }

    // Check that due date is not in the past
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const selectedDate = new Date(dueDate);
    selectedDate.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      setError("Due date cannot be in the past.");
      return;
    }

    setError("");

    const updatedTask = {
      ...task,
      title: title,
      description: description,
      dueDate: dueDate,
      category: category,
      tags: selectedTags,
    };

    if (task) {
      onUpdateTask(updatedTask);
    } else {
      onAddTask(updatedTask);
    }

    navigate("/tasks");
  };

  const tags = ["Urgent", "Important", "Work", "Personal"];
  return (
    <section className="relative bg-white">
      <form
        onSubmit={handleSubmit}
        className="absolute top-60 left-35 flex flex-col gap-15"
      >
        {error && (
          <p className="absolute top-200 left-0 text-lightcoral text-xl z-50">
            {error}
          </p>
        )}
        <div className="flex flex-col">
          <label className="absolute -top-3 left-8 font-main text-2xl bg-white text-nobel leading-none tracking-normal">
            Task Title
          </label>
          <input
            type="text"
            className="w-250 h-20 rounded-sm border border-navvy"
            placeholder="          E.g Project Defense, Assignment ..."
            name="taskTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="absolute bottom-152 bg-white left-8 font-main text-2xl text-nobel leading-none tracking-normal">
            Description
          </label>
          <textarea
            className="w-250 h-50 border rounded-sm border-navvy"
            placeholder="      
            Briefly describe your task..."
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label className="absolute bottom-87 bg-white left-8 font-main text-2xl text-nobel leading-none tracking-normal">
            Tags
          </label>

          <div className="w-250 h-20 rounded-sm border border-navvy ">
            <div
              className="flex gap-5 w-200 items-center absolute top-109 left-10 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              {selectedTags.map((tag) => (
                <span
                  key={tag}
                  className={
                    tag === "Urgent"
                      ? "bg-nobel text-light-gray rounded-sm w-14 text-center"
                      : tag === "Important"
                        ? "bg-nobel text-light-gray  rounded-sm w-20 text-center"
                        : "bg-nobel w-10 text-center text-light-gray rounded-sm"
                  }
                >
                  {tag}
                </span>
              ))}

              <span className="absolute left-225 top-1 w-3.75 h-7.5">
                <img src={Arrow} alt="Arrow" />
              </span>
            </div>

            {isOpen && (
              <div className="absolute top-120 left-0 z-10 w-full bg-white border border-navvy rounded-sm">
                {tags.map((tag) => (
                  <label
                    key={tag}
                    className="flex items-center gap-3 px-10 py-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedTags.includes(tag)}
                      onChange={() => {
                        if (selectedTags.includes(tag)) {
                          setSelectedTags(
                            selectedTags.filter((item) => item !== tag),
                          );
                        } else {
                          setSelectedTags([...selectedTags, tag]);
                        }
                      }}
                    />

                    {tag}
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
        <div>
          <label className="absolute bottom-52 bg-white left-7 font-main text-2xl text-nobel leading-none tracking-normal">
            Due Date
          </label>
          <input
            type="date"
            className="w-250 h-20 rounded-sm border border-navvy"
            style={{ paddingLeft: "40px", paddingRight: "40px" }}
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <div className="relative w-250 h-20">
          <label className="absolute bottom-17 bg-white left-8 font-main text-2xl text-nobel leading-none tracking-normal">
            Category
          </label>
          <select
            className="w-250 h-20 rounded-sm border border-navvy appearance-none"
            style={{ paddingLeft: "40px" }}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select category</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Urgent">Urgent</option>
          </select>

          <span className="absolute right-11 top-10 w-3.75 h-7.5 pointer-events-none">
            <img src={Arrow} alt="Arrow" />
          </span>
        </div>
        <button
          className="absolute top-220 rounded-sm w-250 h-13 text-xl text-off-white bg-magenta"
          type="submit"
        >
          Done
        </button>
      </form>
    </section>
  );
}
