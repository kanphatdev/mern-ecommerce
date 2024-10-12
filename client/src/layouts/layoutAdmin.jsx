import { Outlet } from "react-router-dom";

const LayoutAdmin = () => {
  return (
    <div>
      <h1 className="">sidebar</h1>
      <h1 className="">header bar</h1>
      <hr />
      <Outlet />
    </div>
  );
};

export default LayoutAdmin;
