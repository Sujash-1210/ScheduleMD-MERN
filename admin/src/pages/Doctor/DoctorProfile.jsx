import React, { useContext, useEffect, useState } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { AppContext } from "../../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const DoctorProfile = () => {
  const { dToken, profileData, setProfileData, getProfileData, backendUrl } =
    useContext(DoctorContext);
  const { currency } = useContext(AppContext);
  const [isEdit, setIsEdit] = useState(false);

  const updateProfile = async () => {
    try {
      const updateData = {
        address: profileData.address,
        fees: profileData.fees,
        available: profileData.available,
      };
      const { data } = await axios.post(
        backendUrl + "/api/doctor/update-profile",
        updateData,
        { headers: { dToken } }
      );
      if (data.success) {
        toast.success(data.message);
        setIsEdit(false);
        getProfileData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  useEffect(() => {
    getProfileData();
  }, [dToken]);

  return (
    profileData && (
      <div className="flex flex-col items-center justify-center p-5">
        <div className="flex flex-col gap-6 max-w-2xl w-full bg-white p-5 rounded-lg shadow-lg">
          <div className="flex flex-col sm:flex-row gap-4">
            <img
              className="bg-[#5F6FFF]/80 w-full sm:w-64 rounded-lg object-cover"
              src={profileData.image}
              alt="Doctor profile"
            />
            <div className="flex flex-col justify-between">
              <p className="text-xl font-semibold text-gray-800">
                {profileData.name}
              </p>
              <div className="text-gray-600">
                <p>
                  {profileData.degree} - {profileData.speciality}
                </p>
                <button className="mt-2 py-1 px-3 bg-[#5F6FFF] text-white rounded-lg shadow">
                  {profileData.experience} years of experience
                </button>
              </div>
            </div>
          </div>

          <div className="text-gray-700">
            <p className="font-semibold">About:</p>
            <p className="text-sm">{profileData.about}</p>
          </div>

          <p className="text-lg font-semibold">
            Appointment Fee:{" "}
            <span className="text-[#5F6FFF]">
              {currency}{" "}
              {isEdit ? (
                <input
                  type="number"
                  onChange={(e) =>
                    setProfileData((prev) => ({
                      ...prev,
                      fees: e.target.value,
                    }))
                  }
                  value={profileData.fees}
                />
              ) : (
                profileData.fees
              )}
            </span>
          </p>

          <div className="text-gray-700">
            <p className="font-semibold">Address:</p>
            <p>
              {isEdit ? (
                <input
                  type="text"
                  onChange={(e) =>
                    setProfileData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value },
                    }))
                  }
                  value={profileData.address.line1}
                />
              ) : (
                profileData.address.line1
              )}
              <br />
              {isEdit ? (
                <input
                  type="text"
                  onChange={(e) =>
                    setProfileData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value },
                    }))
                  }
                  value={profileData.address.line2}
                />
              ) : (
                profileData.address.line2
              )}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <input
              className="w-4 h-4 text-[#5F6FFF] focus:ring-[#5F6FFF] border-gray-300 rounded"
              type="checkbox"
              onChange={() =>
                isEdit &&
                setProfileData((prev) => ({
                  ...prev,
                  available: !prev.available,
                }))
              }
              checked={profileData.available}
              name="available"
              id="available"
            />
            <label htmlFor="available" className="text-gray-700">
              Available
            </label>
          </div>
          {isEdit ? (
            <button
              onClick={updateProfile}
              className="py-2 px-4 bg-[#5F6FFF] text-white rounded-lg hover:bg-[#4e5bdd] transition-colors"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setIsEdit(true)}
              className="py-2 px-4 bg-[#5F6FFF] text-white rounded-lg hover:bg-[#4e5bdd] transition-colors"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    )
  );
};

export default DoctorProfile;
