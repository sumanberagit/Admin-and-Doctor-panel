import React, { useState, useEffect } from "react";
import Action1 from "../../../assets/icons/Action1.svg";
import AppointMentDetailModal from "./Modal/AppointMentDetailModal";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const DoctorAppointmentTable = () => {
  const [appointments, setAppointments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const userId = useSelector((state) => state.userId);
  const token = useSelector((state) => state.token);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(
          "https://consultant-backend-jiwv.onrender.com/appointment/all-appointments",
          {
            headers: {
              Authorization: `Bearer ${token}`, // Use token from Redux
            },
          }
        );

        setAppointments(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching appointments:", error);
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [userId, token]);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  if (loading) {
    return <p>Loading appointments...</p>; // Loading state
  }

  if (!Array.isArray(appointments) || appointments.length === 0) {
    return <p>No appointments available</p>; // Handle empty or non-array response
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0]; // Returns date in YYYY-MM-DD format
  };
  const formatDay = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { weekday: "long" }); // Returns day of the week (e.g., Monday)
  };

  return (
    <div className="overflow-x-auto mx-5 my-5">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">
              #
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">
              Name
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">
              Age
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">
              Email
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">
              Gender
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">
              Date
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">
              Time
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">
              Doctor
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900"></th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={appointment.id}>
              <td className="py-4 border-b text-sm text-gray-700 text-center">
                {index + 1}
              </td>
              <td className="flex flex-row items-center py-4 border-b text-sm text-gray-700 text-center">
                <img
                  src={
                    appointment.patientImage || "https://via.placeholder.com/50"
                  }
                  alt="img"
                  className="w-12 h-12 rounded-full mr-4"
                />
                {appointment.user.name}
              </td>
              <td className="py-4 border-b text-sm text-gray-700 text-center">
                {appointment.age}
              </td>
              <td className="py-4 border-b text-sm text-gray-700 text-center">
                {appointment.user.email}
              </td>
              <td className="py-4 border-b text-sm text-gray-700 text-center">
                {appointment.user.gender}
              </td>
              <td className="py-4 border-b text-sm text-gray-700 text-center">
                {formatDate(appointment.date)}
              </td>
              <td className="py-4 border-b text-sm text-gray-700 text-center">
                {formatDay(appointment.time)}
              </td>
              <td className="flex flex-row py-4 border-b items-center text-sm text-gray-700 text-center">
                <img
                  src={
                    appointment.doctorImage || "https://via.placeholder.com/50"
                  }
                  alt="img"
                  className="w-12 h-12 rounded-full mr-4"
                />
                {`${appointment.doctor.firstName} ${appointment.doctor.lastName}`}
              </td>
              <td className="py-4 border-b text-sm text-gray-700 text-center">
                <div className="flex flex-row">
                  <img
                    src={Action1}
                    alt=""
                    onClick={() =>
                      navigate(`/patientprofile/${appointment.user._id}`)
                    } // Navigate to patient profile
                    className="cursor-pointer"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <AppointMentDetailModal show={showModal} onClose={closeModal} />
    </div>
  );
};

export default DoctorAppointmentTable;
