import React, { useState, useEffect } from "react";
import "../../../../App.css";
import axios from "axios";
import Icon from "../../../../assets/images/users-vector-icon-png_260862.jpg";
import { useSelector } from "react-redux";

const Appointment = () => {
  // State to hold the list of doctors and appointments
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const userType = useSelector((state) => state.setUserType);
  const userId = useSelector((state) => state.setUserId);

  // Fetch data based on userType
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (userType === 1) {
          // Fetch doctors data
          const response = await axios.get(
            "https://consultant-backend-jiwv.onrender.com/public/doctor"
          );
          setDoctors(response.data.doctors); // Assuming the response contains a 'doctors' array
        } else if (userType === 2) {
          // Fetch appointments data
          const response = await axios.get(
            `https://consultant-backend-jiwv.onrender.com/doctor/${userId}/appointments`
          );
          setAppointments(response.data.appointments);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userType]); // Dependency array includes userType to refetch data if userType changes

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0]; // Returns date in YYYY-MM-DD format
  };

  return (
    <div className="flex row space-x-4 mx-5">
      <div className="p-6 bg-white rounded-lg shadow-md w-96 mb-10">
        <div className="flex justify-between items-center mb-4 border-b py-3">
          <h2 className="text-lg font-semibold">
            <span role="img" aria-label="calendar" className="mr-2">
              📅
            </span>
            {userType === 1 ? "Latest Doctors" : "Latest Appointments"}
          </h2>
          <span className="text-gray-500">
            {userType === 1
              ? `${doctors.length} Doctors`
              : `${appointments.length} Appointments`}
          </span>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className="doctor-card-scroll">
            {userType === 1 ? (
              doctors.length > 0 ? (
                doctors.map((doctor, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between py-2 last:border-b-0"
                  >
                    <div className="flex items-center">
                      <img
                        src={Icon} // Assuming the doctor object has an 'image' field
                        className="w-10 h-10 rounded-full mr-4"
                      />
                      <div>
                        <p className="font-medium">
                          {doctor.firstName} {doctor.lastName}
                        </p>{" "}
                        {/* Doctor name */}
                        <p className="text-gray-500 text-sm">
                          Speciality: {doctor.Departments}
                        </p>{" "}
                        {/* Doctor speciality */}
                      </div>
                    </div>
                  </li>
                ))
              ) : (
                <p>No doctors found</p>
              )
            ) : userType === 2 ? (
              appointments.length > 0 ? (
                appointments.map((appointment, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between py-2 last:border-b-0"
                  >
                    <div className="flex items-center">
                      {/* Customize this section based on your appointment data */}
                      <div>
                        <p className="font-medium">
                          Appointment with{" "}
                          <span className="text-blue-500">
                            {appointment.user.name}
                          </span>
                        </p>
                        <p className="text-gray-500 text-sm">
                          Date: {formatDate(appointment.date)}
                        </p>
                        {/* Add more fields as needed */}
                      </div>
                    </div>
                  </li>
                ))
              ) : (
                <p>No appointments found</p>
              )
            ) : null}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Appointment;
