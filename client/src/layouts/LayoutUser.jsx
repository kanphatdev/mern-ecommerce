import { Outlet } from "react-router-dom";

const LayoutUser = () => {
  return (
    <div>
      <h1 className="">nav</h1>
      <Outlet />
    </div>
  );
};

export default LayoutUser;
