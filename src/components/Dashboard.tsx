import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./guard/Sidebar";
import SocialInterface from "./SocialInterface";
import Socials from "./Socials";

const Dashboard = () => {
  return (
    <div className="w-full min-h-screen relative grid grid-cols-12 grid-rows-6">
      <div className="col-start-1 col-end-2 row-start-1 row-end-7">
        <Sidebar />
      </div>
      <div className="col-start-2 col-end-13 row-start-1 row-end-7 grid grid-cols-12 grid-rows-6">
        <div className="col-start-1 bg-[#252525] rounded-lg col-end-6 row-start-1 row-end-4 m-6 flex justify-center items-center">
          <Outlet />
        </div>
        <div className="col-start-6 bg-[#252525] rounded-lg col-end-13 row-start-1 row-end-4 m-6 flex justify-center items-center">
          <Socials />
        </div>
        <div className="overflow-x-auto col-start-1 bg-[#252525] rounded-lg col-end-13 row-start-4 row-end-7 m-6 flex justify-center items-center">
          <SocialInterface />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
