import { FaUser, FaHome, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { logout } from "../../utils/fetchers/User";

import "../../index.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
    logout();
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col items-center gap-8 px-4 bg-[#151515] py-8 rounded-lg text-white">
        <NavLink to={"/users"}>
          <FaUser />
        </NavLink>
        <NavLink to={"/home"}>
          <FaHome />
        </NavLink>
        <button onClick={handleLogout}>
          <FaSignOutAlt />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
