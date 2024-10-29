import React, { useState, useEffect } from "react";
import axios from "axios";
import BaseLayout from "../../../layouts/BaseLayout";
import "./DoctorList.css";
import { useNavigate } from "react-router-dom";
import Icon from "../../../assets/images/users-vector-icon-png_260862.jpg";
import { useDispatch } from "react-redux";
import { setDepartments, setBio } from "../../../redux/Reducer/AuthReducer";

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDoctors = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:8080/public/doctor");
        const doctorsData = response.data.doctors;
        setDoctors(doctorsData);
        setFilteredDoctors(doctorsData);

        const departmentsArray = doctorsData.map(
          (doctor) => doctor.Departments
        );
        const namesArray = doctorsData.map(
          (doctor) => doctor.firstName + " " + doctor.lastName
        );
        dispatch(setDepartments(departmentsArray));
        dispatch(setBio(namesArray));
      } catch (error) {
        console.error("There was an error fetching the doctors!", error);
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchDoctors();
  }, [dispatch]);

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = doctors.filter(
      (doctor) =>
        doctor.firstName.toLowerCase().includes(value) ||
        doctor.lastName.toLowerCase().includes(value) ||
        doctor.Departments.toLowerCase().includes(value)
    );

    setFilteredDoctors(filtered);
  };

  const handleNavigation = () => {
    navigate("/doctors/invite-doctor");
  };

  const handleClick = (doctor) => {
    navigate(`/doctors/profile`, {
      state: { doctor, contact: doctor.contact, email: doctor.email },
    });
  };

  const loader = (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
      <svg
        className="animate-spin h-32 w-32 text-blue-500" // Large spinner
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v8H4z"
        ></path>
      </svg>
    </div>
  );

  return (
    <BaseLayout>
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="mx-5 flex justify-between">
            <h3 className="py-2 font-bold text-gray-700 text-lg">Doctors</h3>
          </div>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md add-doctor"
            onClick={handleNavigation}
          >
            Invite New Doctor
          </button>
        </div>

        <div className="flex justify-start mb-4">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search by name or department..."
            className="w-100 p-2 border border-gray-300 rounded-md"
          />
        </div>

        {loading ? ( // Conditional rendering based on loading state
          loader
        ) : filteredDoctors.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {filteredDoctors.map((doctor) => (
              <div
                key={doctor._id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={Icon}
                  alt={doctor.firstName + " " + doctor.lastName}
                  className="w-full h-48 object-cover"
                />
                <div className="doctors-footer p-4 flex flex-col justify-center items-center">
                  <button onClick={() => handleClick(doctor)}>
                    <h3>{doctor.firstName + " " + doctor.lastName}</h3>
                    <p className="doctor-type text-center">
                      {doctor.Departments}
                    </p>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No doctors available</p>
        )}
      </div>
    </BaseLayout>
  );
};

export default DoctorsList;
