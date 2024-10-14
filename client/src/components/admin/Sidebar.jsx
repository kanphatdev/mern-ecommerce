import { NavLink } from "react-router-dom";
import { Home, Tag, Box, Settings, LogOut } from "lucide-react"; // Importing lucide icons

const Sidebar = () => {
  return (
    <div className="bg-success w-64 flex flex-col h-screen">
      {/* Header */}
      <div className="h-24 bg-base-100 flex items-center justify-center text-2xl font-bold">
        Admin Panel
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-4 space-y-2">
        {/* Dashboard */}
        <NavLink
          to="/admin"
          end
          className={({ isActive }) =>
            isActive
              ? "bg-primary text-white flex items-center px-4 py-2 rounded-lg"  // Active state
              : "bg-base-200 hover:bg-neutral flex items-center px-4 py-2 rounded-lg"  // Inactive state
          }
        >
          <Home className="w-5 h-5 mr-2" /> {/* Icon */}
          Dashboard
        </NavLink>

        {/* Category */}
        <NavLink
          to="category"
          className={({ isActive }) =>
            isActive
              ? "bg-primary text-white flex items-center px-4 py-2 rounded-lg"
              : "bg-base-200 hover:bg-neutral flex items-center px-4 py-2 rounded-lg"
          }
        >
          <Tag className="w-5 h-5 mr-2" /> {/* Icon */}
          Category
        </NavLink>

        {/* Product */}
        <NavLink
          to="product"
          className={({ isActive }) =>
            isActive
              ? "bg-primary text-white flex items-center px-4 py-2 rounded-lg"
              : "bg-base-200 hover:bg-neutral flex items-center px-4 py-2 rounded-lg"
          }
        >
          <Box className="w-5 h-5 mr-2" /> {/* Icon */}
          Product
        </NavLink>

        {/* Manage */}
        <NavLink
          to="manage"
          className={({ isActive }) =>
            isActive
              ? "bg-primary text-white flex items-center px-4 py-2 rounded-lg"
              : "bg-base-200 hover:bg-neutral flex items-center px-4 py-2 rounded-lg"
          }
        >
          <Settings className="w-5 h-5 mr-2" /> {/* Icon */}
          Manage
        </NavLink>
      </nav>

      {/* Logout */}
      <div className="mb-4 px-4">
        <NavLink
          to="/logout"
          className={({ isActive }) =>
            isActive
              ? "bg-primary text-white flex items-center px-4 py-2 rounded-lg"
              : "bg-base-200 hover:bg-neutral flex items-center px-4 py-2 rounded-lg"
          }
        >
          <LogOut className="w-5 h-5 mr-2" /> {/* Icon */}
          Logout
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
