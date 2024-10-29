import React, { useState, useEffect } from "react";
import Action1 from "../../../assets/icons/Action1.svg";
import AppointMentDetailModal from "./Modal/AppointMentDetailModal";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DoctorAvtar from "../../../assets/images/jurica-koletic-7YVZYZeITc8-unsplash.jpg";
import PatientAvtar from "../../../assets/images/alex-suprun-ZHvM3XIOHoE-unsplash.jpg";

const DoctorAppointmentTable = () => {
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Search state
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const userId = useSelector((state) => state.userId);
  const token = useSelector((state) => state.token);
  const navigate = useNavigate();

  // Loader component
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

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/appointment/all-appointments",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setAppointments(response.data);
        setFilteredAppointments(response.data); // Initialize filteredAppointments
        setLoading(false);
      } catch (error) {
        console.error("Error fetching appointments:", error);
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [userId, token]);

  // Handle search input change
  const handleSearchChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);

    // Filter appointments by name starting with search term
    const filtered = appointments.filter((appointment) =>
      appointment.user.name.toLowerCase().startsWith(searchValue)
    );
    setFilteredAppointments(filtered);
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };

  const formatDay = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  if (loading) {
    return loader; // Show loader while loading
  }

  return (
    <div className="mx-5 my-5">
      {/* Search input field */}
      <div className="flex justify-end mb-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-100 p-2 border border-gray-300 rounded"
        />
      </div>

      {/* Show message if no appointments match the search term */}
      {filteredAppointments.length === 0 ? (
        <div className="text-center text-gray-700 font-semibold">
          No appointments available
        </div>
      ) : (
        <div className="overflow-x-auto">
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
                  Day
                </th>
                <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">
                  Doctor
                </th>
                <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900"></th>
              </tr>
            </thead>
            <tbody>
              {filteredAppointments.map((appointment, index) => (
                <tr key={appointment.id}>
                  <td className="py-4 border-b text-sm text-gray-700 text-center">
                    {index + 1}
                  </td>
                  <td className="flex flex-row items-center py-4 border-b text-sm text-gray-700 text-center">
                    <img
                      src={PatientAvtar}
                      alt="Patient Avatar"
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
                      src={DoctorAvtar}
                      alt="Doctor Avatar"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    {`${appointment.doctor.firstName} ${appointment.doctor.lastName}`}
                  </td>

                  <td className="py-4 border-b text-sm text-gray-700 text-center">
                    <div className="flex flex-row">
                      <img
                        src={Action1}
                        alt="Action"
                        onClick={() =>
                          navigate(`/patientprofile/${appointment.user._id}`)
                        }
                        className="cursor-pointer"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <AppointMentDetailModal show={showModal} onClose={closeModal} />
    </div>
  );
};

export default DoctorAppointmentTable;
