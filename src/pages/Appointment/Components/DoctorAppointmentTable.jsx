import React, { useState, useEffect } from "react";
import Action1 from "../../../assets/icons/Action1.svg";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DoctorAppointmentTable = () => {
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const userId = useSelector((state) => state.setUserId);
  const token = useSelector((state) => state.token);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(
          `https://consultant-backend-jiwv.onrender.com/doctor/${userId}/appointments`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setAppointments(response.data.appointments);
        setFilteredAppointments(response.data.appointments);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching appointments:", error);
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [userId, token]);

  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };

  // Function to format day
  const formatDay = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  // Function to navigate to patient profile
  const navigateToPatientProfile = (patientId) => {
    navigate(`/patientprofile/${patientId}`);
  };

  // Handle search functionality
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = appointments.filter(
      (appointment) =>
        appointment.user.name.toLowerCase().includes(query) ||
        appointment.disease.toLowerCase().includes(query)
    );
    setFilteredAppointments(filtered);
  };

  // Handle click on Action1 image to open first modal
  const handleActionClick = (appointment) => {
    setSelectedAppointment(appointment);
    setShowFirstModal(true);
  };

  // Handle closing the modals
  const closeModal = () => {
    setShowFirstModal(false);
    setShowStatusModal(false);
    setSelectedAppointment(null);
  };

  // Handle status option click to open second modal
  const handleStatusClick = () => {
    setShowFirstModal(false);
    setShowStatusModal(true);
  };

  // Function to handle the appointment status (accept/decline)
  const handleAppointmentResponse = async (status) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/appointment/respond",
        {
          appointmentId: selectedAppointment._id, // Assuming each appointment has an _id
          status: status, // Status can be "accepted" or "declined"
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Handle success: update UI or show a message
      if (response.status === 200) {
        alert(`Appointment ${status} successfully!`);
        setAppointments((prevAppointments) =>
          prevAppointments.filter(
            (appointment) => appointment._id !== selectedAppointment._id
          )
        );
        setFilteredAppointments((prevAppointments) =>
          prevAppointments.filter(
            (appointment) => appointment._id !== selectedAppointment._id
          )
        );
        closeModal();
      }
    } catch (error) {
      console.error(`Error ${status} appointment:`, error);
    }
  };

  return (
    <div className="overflow-x-auto mx-5 my-5">
      {/* Search Input */}
      <div className="flex justify-end mb-4">
        <input
          type="text"
          placeholder="Search by name or disease..."
          value={searchQuery}
          onChange={handleSearch}
          className="p-2 border border-gray-300 rounded-md focus:outline-none"
        />
      </div>

      {/* Loading Spinner */}
      {loading ? (
        <div>Loading...</div>
      ) : (
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
                Disease
              </th>
              <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900"></th>
            </tr>
          </thead>
          <tbody>
            {filteredAppointments.length > 0 ? (
              filteredAppointments.map((appointment, index) => (
                <tr key={appointment.id}>
                  <td className="py-4 border-b text-sm text-gray-700 text-center">
                    {index + 1}
                  </td>
                  <td className="flex flex-row items-center py-4 border-b text-sm text-gray-700 text-center">
                    <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center mr-4 text-white">
                      {appointment.user.name
                        .split(" ")
                        .map((name) => name.charAt(0).toUpperCase())
                        .slice(0, 2)
                        .join("")}
                    </div>
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
                    {formatDay(appointment.date)}
                  </td>
                  <td className="py-4 border-b text-sm text-gray-700 text-center">
                    {appointment.disease}
                  </td>
                  <td className="py-4 border-b text-sm text-gray-700 text-center">
                    <div className="flex flex-row">
                      <img
                        src={Action1}
                        alt=""
                        onClick={() => handleActionClick(appointment)}
                        className="cursor-pointer"
                      />
                    </div>
                  </td>
                  <td className="py-4 border-b text-xl text-blue-200"></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="py-4 text-center text-gray-700">
                  No appointments available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}

      {/* First Modal (Profile or Status) */}
      {showFirstModal && selectedAppointment && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-4">Choose an Option</h3>
            <button
              onClick={() =>
                navigateToPatientProfile(selectedAppointment.user._id)
              }
              className="bg-blue-500 text-white px-4 py-2 rounded mr-4"
            >
              Profile
            </button>
            <button
              onClick={handleStatusClick}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Status
            </button>
            <h2>
              {filteredAppointments.length > 0
                ? filteredAppointments.map((appointment, index) => (
                    <tr>
                      <td>{appointment.status}</td>
                    </tr>
                  ))
                : null}
            </h2>

            <button
              onClick={closeModal}
              className="bg-gray-500 text-white px-4 py-2 rounded ml-4"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Second Modal (Accept or Decline) */}
      {showStatusModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-4">Appointment Status</h3>
            <button
              onClick={() => handleAppointmentResponse("accepted")}
              className="bg-green-500 text-white px-4 py-2 rounded mr-4"
            >
              Accept
            </button>
            <button
              onClick={() => handleAppointmentResponse("declined")}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Decline
            </button>
            <button
              onClick={closeModal}
              className="bg-gray-500 text-white px-4 py-2 rounded ml-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorAppointmentTable;
