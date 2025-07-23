import React, { useContext, useEffect } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";

const DoctorAppointment = () => {
  const {
    dToken,
    appointments,
    getAppointments,
    completeAppointment,
    cancelAppointment,
  } = useContext(DoctorContext);
  const { calculateAge, slotDateFormat, currency } = useContext(AppContext);

  useEffect(() => {
    if (dToken) {
      getAppointments();
    }
  }, [dToken]);

  return (
    <div className="w-full px-4 py-5 md:px-10 md:py-8">
      <p className="mb-4 text-xl font-semibold text-gray-800">All Appointments</p>
      <div className="bg-white border border-gray-200 rounded-lg text-sm max-h-[80vh] min-h-[50vh] overflow-y-auto">
        <div className="hidden sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-2 py-3 px-6 border-b border-gray-200 text-gray-600 font-medium">
          <p>#</p>
          <p>Patient</p>
          <p>Payment</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Fees</p>
          <p>Action</p>
        </div>

        {appointments.length > 0 ? (
          [...appointments].reverse().map((item, index) => (
            <div
              className="flex flex-wrap sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-2 items-center text-gray-700 py-4 px-6 border-b border-gray-100 hover:bg-gray-50"
              key={item._id}
            >
              <p className="hidden sm:block">{index + 1}</p>

              <div className="flex items-center gap-2">
                <img
                  className="w-8 h-8 rounded-full object-cover"
                  src={item.userData.image}
                  alt="User"
                />
                <p className="truncate max-w-[120px]">{item.userData.name}</p>
              </div>

              <p>
                <span className="text-xs inline-block border border-[#5F6FFF] text-[#5F6FFF] px-2 py-0.5 rounded-full">
                  {item.payment ? "ONLINE" : "CASH"}
                </span>
              </p>

              <p className="hidden sm:block">{calculateAge(item.userData.dob)}</p>

              <p>
                {slotDateFormat(item.slotDate)}, {item.slotTime}
              </p>

              <p>
                {currency}
                {item.amount}
              </p>

              {item.cancelled ? (
                <p className="text-red-500 text-xs font-semibold">Cancelled</p>
              ) : item.isCompleted ? (
                <p className="text-green-500 text-xs font-semibold">Completed</p>
              ) : (
                <div className="flex gap-2">
                  <img
                    onClick={() => cancelAppointment(item._id)}
                    className="w-6 cursor-pointer hover:opacity-75"
                    src={assets.cancel_icon}
                    alt="Cancel"
                    title="Cancel"
                  />
                  <img
                    onClick={() => completeAppointment(item._id)}
                    className="w-6 cursor-pointer hover:opacity-75"
                    src={assets.tick_icon}
                    alt="Complete"
                    title="Mark Complete"
                  />
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="py-10 text-center text-gray-500">No appointments found.</div>
        )}
      </div>
    </div>
  );
};

export default DoctorAppointment;
