import { Outlet } from "react-router-dom";
import Sidebar from "../components/admin/Sidebar";
import HeaderBar from "../components/admin/HeaderBar";

const LayoutAdmin = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <HeaderBar />
        <main className="flex-1 p-6 bg-base-300 overflow-y-auto">
           <Outlet />
        </main>
       
      </div>
    </div>
  );
};

export default LayoutAdmin;
