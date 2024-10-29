import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import userAvtar from "../../../assets/images/users-vector-icon-png_260862.jpg";

// DoctorCard Component
const DoctorCard = ({ name, specialty, experience, image }) => {
  return (
    <div className="flex items-center space-x-2 p-4 bg-gray-50 rounded-lg shadow-md mb-4">
      <img
        src={image}
        alt={name}
        className="max-w-28 max-h-28 rounded-full object-cover"
      />
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600">{specialty}</p>
        <p className="text-sm text-gray-500">{experience}</p>
      </div>
    </div>
  );
};

// DoctorsList Component
const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]); // State for storing doctor data
  const [showAll, setShowAll] = useState(false); // State for controlling view
  const navigate = useNavigate();

  // Fetch doctors data from API
  useEffect(() => {
    axios
      .get("http://localhost:8080/public/doctor")
      .then((response) => {
        setDoctors(response.data.doctors); // Accessing doctors array from response
      })
      .catch((error) => {
        console.error("Error fetching the doctors data:", error);
      });
  }, []);

  // Show only the first 3 doctors if showAll is false
  const visibleDoctors = showAll ? doctors : doctors.slice(0, 4); // Limit to 3 for the initial view

  return (
    <div className="bg-white shadow-md p-5 rounded-lg w-[30%] h-auto">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Doctors List</h2>
      <div className="space-y-5">
        {visibleDoctors.map((doctor) => (
          <DoctorCard
            key={doctor._id}
            name={`${doctor.firstName} ${doctor.lastName}`}
            specialty={doctor.Departments}
            image={userAvtar}
          />
        ))}
      </div>
      {/* Show View All Doctors button if there are more than 3 doctors */}
      {!showAll && doctors.length > 3 && (
        <button
          onClick={() => navigate("/doctor")}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4"
        >
          View All Doctors
        </button>
      )}
    </div>
  );
};

export default DoctorsList;
