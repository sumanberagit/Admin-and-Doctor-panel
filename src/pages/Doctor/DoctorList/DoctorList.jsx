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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:8080/public/doctor")
      .then((response) => {
        const doctorsData = response.data.doctors;
        setDoctors(doctorsData);

        const departmentsArray = doctorsData.map(
          (doctor) => doctor.Departments
        );
        const namesArray = doctorsData.map(
          (doctor) => doctor.firstName + " " + doctor.lastName
        );
        dispatch(setDepartments(departmentsArray));
        dispatch(setBio(namesArray));
      })
      .catch((error) => {
        console.error("There was an error fetching the doctors!", error);
      });
  }, [dispatch]);

  const handleNavigation = () => {
    navigate("/doctors/invite-doctor");
  };

  const handleClick = (doctor) => {
    navigate(`/doctors/profile`, { state: { doctor } });
  };

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
        {doctors.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {doctors.map((doctor) => (
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
