import React from "react";
import profile from "../../../../assets/images/google.png";
import bg from "../../../../assets/images/trioakBg.png";
import PatientAvtar from "../../../../assets/images/alex-suprun-ZHvM3XIOHoE-unsplash.jpg";

const ProfileCard = ({ patientData }) => {
  // Destructure necessary data from patientData
  const {
    name,
    age,
    gender,
    phone,
    location,
    blood_group,
    // Add more fields as necessary based on your API response
  } = patientData;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg h-[550px] w-[900px]">
      <div className="relative">
        <img
          className="w-full h-32 rounded-t-lg object-cover"
          src={bg}
          alt="Cover"
        />
        {/* <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white w-32 h-32 bg-gray-300 flex items-center justify-center text-3xl font-bold text-white">
          {patientData.name
            .split(" ")
            .map((name) => name.charAt(0).toUpperCase())
            .slice(0, 2)
            .join("")}
        </div> */}
        <img
          src={PatientAvtar}
          alt="Doctor Avatar"
          className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white w-32 h-32 bg-gray-300 flex items-center justify-center text-3xl font-bold text-white"
        />
      </div>
      <div className="text-center mt-20">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p className="text-gray-500">{age} Years old</p>
        <div className="mt-4">
          <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{ width: "89%" }}
            ></div>
          </div>
        </div>
        <div className="mt-4 space-y-2 text-left">
          <p>
            <strong>Gender:</strong> {gender}
          </p>
          <p>
            <strong>Phone No.:</strong> {phone}
          </p>
          <p>
            <strong>Address:</strong> {location}
          </p>
          <p>
            <strong>Blood Group:</strong> {blood_group}
          </p>
          {/* Add more fields as necessary */}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
