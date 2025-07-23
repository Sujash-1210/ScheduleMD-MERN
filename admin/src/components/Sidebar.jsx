import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  CalendarCheck,
  PlusCircle,
  Stethoscope,
  UserCircle,
  X,
} from "lucide-react";
import { AdminContext } from "../context/AdminContext";
import { DoctorContext } from "../context/DoctorContext";

const Sidebar = ({ closeSidebar }) => {
  const { aToken } = useContext(AdminContext);
  const { dToken } = useContext(DoctorContext);

  // Admin-only pages
  const adminNav = [
    {
      to: "/admin-dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      to: "/all-appointments",
      label: "All Appointments",
      icon: <CalendarCheck size={20} />,
    },
    {
      to: "/add-doctor",
      label: "Add Doctor",
      icon: <PlusCircle size={20} />,
    },
    {
      to: "/doctor-list",
      label: "Doctors List",
      icon: <Stethoscope size={20} />,
    },
  ];

  // Doctor-only pages
  const doctorNav = [
    {
      to: "/doctor-dashboard",
      label: "Doctor Dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      to: "/doctor-appointments",
      label: "Doctor Appointments",
      icon: <CalendarCheck size={20} />,
    },
    {
      to: "/doctor-profile",
      label: "Doctor Profile",
      icon: <UserCircle size={20} />,
    },
  ];

  // Choose nav items based on logged-in role
  const navItems = aToken ? adminNav : dToken ? doctorNav : [];

  return (
    <div className="h-full w-full bg-white border-r border-gray-200 pt-16 overflow-y-auto">
      {/* Mobile close button */}
      <div className="md:hidden flex justify-end px-4 py-2 mt-4">
        <button onClick={closeSidebar}>
          <X size={24} />
        </button>
      </div>

      {/* Navigation links */}
      <nav className="flex flex-col gap-2 px-4 pb-6">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            onClick={closeSidebar}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium ${
                isActive
                  ? "bg-[#5F6FFF] text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            {item.icon}
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
