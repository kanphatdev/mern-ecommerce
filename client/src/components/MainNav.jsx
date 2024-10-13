import { Link } from "react-router-dom";
import { ShoppingCart, Home, Store, UserPlus, LogIn } from "lucide-react"; // Lucide icons

const MainNav = () => {
  return (
    <nav className="bg-accent shadow-lg">
      <div className="mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Left side (Logo and Navigation links) */}
          <div className="flex items-center gap-6">
            <Link to={"/"} className="btn btn-ghost text-xl capitalize flex items-center gap-2">
              <Home className="w-5 h-5" /> {/* Home icon */}
              logo
            </Link>
            <Link to={"/"} className="btn btn-ghost text-xl capitalize flex items-center gap-2">
              <Home className="w-5 h-5" /> {/* Home icon */}
              home
            </Link>
            <Link to={"shop"} className="btn btn-ghost text-xl capitalize flex items-center gap-2">
              <Store className="w-5 h-5" /> {/* Shop icon */}
              shop
            </Link>
            <Link to={"cart"} className="btn btn-ghost text-xl capitalize flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" /> {/* Cart icon */}
              cart
            </Link>
          </div>

          {/* Right side (Auth links) */}
          <div className="flex items-center gap-6">
            <Link to={"register"} className="btn btn-ghost text-xl capitalize flex items-center gap-2">
              <UserPlus className="w-5 h-5" /> {/* Register icon */}
              register
            </Link>
            <Link to={"login"} className="btn btn-ghost text-xl capitalize flex items-center gap-2">
              <LogIn className="w-5 h-5" /> {/* Login icon */}
              login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
