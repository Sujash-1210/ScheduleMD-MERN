import React, { useContext, useState } from "react";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import { AdminContext } from "./context/AdminContext";
import { DoctorContext } from "./context/DoctorContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard";
import AllAppointments from "./pages/Admin/AllAppointments";
import AddDoctor from "./pages/Admin/AddDoctor";
import DoctorsList from "./pages/Admin/DoctorsList";
import DoctorDashboard from "./pages/Doctor/DoctorDashboard";
import DoctorAppointment from "./pages/Doctor/DoctorAppointment";
import DoctorProfile from "./pages/Doctor/DoctorProfile";

const App = () => {
  const { aToken } = useContext(AdminContext);
  const { dToken } = useContext(DoctorContext);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <ToastContainer />
      {aToken || dToken ? (
        <div className="flex flex-col h-screen overflow-hidden">
          {/* Navbar with toggle function */}
          <Navbar setShowSidebar={setShowSidebar} />

          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar for mobile */}
            <div
              className={`fixed inset-y-0 left-0 w-64 bg-white z-40 transform shadow-lg transition-transform duration-300 ease-in-out md:hidden ${
                showSidebar ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <Sidebar closeSidebar={() => setShowSidebar(false)} />
            </div>

            {/* Sidebar for desktop */}
            <div className="hidden md:block w-72 h-full border-r border-gray-200">
              <Sidebar />
            </div>

            {/* Main content */}
            <div className="flex-1 overflow-y-auto bg-[#eceeff] p-4">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/admin-dashboard" element={<Dashboard />} />
                <Route path="/all-appointments" element={<AllAppointments />} />
                <Route path="/add-doctor" element={<AddDoctor />} />
                <Route path="/doctor-list" element={<DoctorsList />} />
                <Route path="/" element={<DoctorDashboard />} />
                <Route path="/doctor-appointments" element={<DoctorAppointment />} />
                <Route path="/doctor-profile" element={<DoctorProfile />} />
              </Routes>
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default App;
