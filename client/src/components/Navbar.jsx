import { Link, useLocation } from "react-router-dom";

import Avatar from "../assets/avatar.png";

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isTasksPage = location.pathname.toLowerCase() === "/tasks";
  const isNewTaskPage = location.pathname.toLowerCase() === "/tasks/new";
  const isEditTaskPage = location.pathname.toLowerCase().includes("/edit");
  const hideNewTaskLink = isNewTaskPage || isEditTaskPage;

  return (
    <nav
      className={`bg-navvy sticky top-0 z-50 shadow-sm ${isHome ? "h-23.25" : "h-23"}`}
    >
      <div className="flex w-full relative">
        <div className="flex w-39 h-10.25 items-center absolute top-6.5 left-50">
          <Link to="/" className="absolute -left-13.5">
            <div className="relative w-11.25 h-11.25">
              <div
                className="absolute w-11.5 h-10 top-0 left-0 rounded-tr-[22px] rounded-br-[22.8px] opacity-100"
                style={{
                  background:
                    "linear-gradient(201.09deg, #974FD0 14.32%, rgba(106, 143, 198, 0.35) 69.58%, #2D0050 97.22%)",
                }}
              />

              {/* "T" letter on top */}
              <span className="absolute w-5 h-4 top-4.5 left-3 font-main font-semibold text-xxl text-navvy leading-none tracking-normal flex items-center justify-center">
                T
              </span>
            </div>
          </Link>
          <h1 className="text-Eggplant text-display font-main font-semibold leading-none tracking-normal">
            TaskDuty
          </h1>
        </div>
        <div
          className={`flex text-nowrap items-center  absolute  ${isHome ? "top-4 left-235 w-70 h-15 gap-6" : "top-4 left-245 gap-10"}`}
        >
          {!hideNewTaskLink && (
            <Link
              className={`text-electric-black font-medium font-main ${
                isHome ? "text-xl" : "text-lg"
              } leading-none tracking-normal`}
              to="/tasks/new"
            >
              New Tasks
            </Link>
          )}

          {!isTasksPage && (
            <Link
              className={`text-electric-black font-medium font-main ${
                isHome ? "text-xl" : "text-lg"
              } leading-none tracking-normal`}
              to="/tasks"
            >
              All Tasks
            </Link>
          )}
          <Link to="#">
            <img
              className={` ${isHome ? "w-13 h-13" : "w-13 h-13"}`}
              src={Avatar}
              alt="Avatar"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
