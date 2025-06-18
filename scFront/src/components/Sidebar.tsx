import { Link, useLocation } from "react-router-dom";
import { Calendar, Heart, BookOpenText, LayoutDashboard } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  const linkClasses = (path: string) =>
    `flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-purple-100 transition ${
      location.pathname === path ? "bg-purple-200 font-semibold" : ""
    }`;

  return (
    <aside className="bg-white shadow h-screen w-56 fixed left-0 top-0 p-4">
      <h2 className="text-xl font-bold mb-6 text-purple-800">StreakCount</h2>
      <nav className="flex flex-col gap-2">
        <Link to="/dashboard" className={linkClasses("/dashboard")}>
          <LayoutDashboard size={18} />
          Dashboard
        </Link>
        <Link to="/calendar" className={linkClasses("/calendar")}>
          <Calendar size={18} />
          Calendar
        </Link>
        <Link to="/new-lover" className={linkClasses("/new-lover")}>
          <Heart size={18} />
          New Lover
        </Link>
        <Link to="/lovedex" className={linkClasses("/lovedex")}>
          <BookOpenText size={18} />
          Lovedex
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
