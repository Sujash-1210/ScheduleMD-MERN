import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AdminContext } from "../context/AdminContext";
import { DoctorContext } from "../context/DoctorContext";
import { useNavigate } from "react-router-dom";
import { Menu } from "lucide-react"; // Hamburger icon

const Navbar = ({ setShowSidebar }) => {
  const { aToken, setAToken } = useContext(AdminContext);
  const { dToken, setDToken } = useContext(DoctorContext);
  const navigate = useNavigate();

  const logout = () => {
    if (aToken) {
      setAToken("");
      localStorage.removeItem("aToken");
    }
    if (dToken) {
      setDToken("");
      localStorage.removeItem("dToken");
    }
    navigate("/");
  };

  return (
    <div className="w-full bg-white shadow-md  top-0 left-0 ">
      <div className="flex justify-between items-center px-4 md:px-8 py-3">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          {/* Hamburger menu for mobile */}
          <button
            onClick={() => setShowSidebar((prev) => !prev)}
            className="md:hidden"
          >
            <Menu size={24} />
          </button>

          {/* Logo */}
          <img
            src={assets.scheduleMD}
            alt="Logo"
            className="w-28 sm:w-36 h-12 object-contain"
          />

          {/* Role Tag */}
          <p className="hidden sm:inline-block border px-3 py-1 rounded-full border-gray-500 text-gray-600 text-sm">
            {aToken ? "Admin" : "Doctor"}
          </p>
        </div>

        {/* Logout Button */}
        <button
          onClick={logout}
          className="bg-[#5F6FFF] text-white text-sm px-5 py-2 rounded-full hover:bg-[#4753ff] transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
