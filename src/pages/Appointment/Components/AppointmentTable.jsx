import React, { useState, useEffect } from "react";
import axios from "axios"; // Axios for API calls
import Action1 from "../../../assets/icons/Action1.svg";
import AppointMentDetailModal from "./Modal/AppointMentDetailModal";

const AppointmentTable = () => {
  const [patients, setPatients] = useState([]); // Initialize with an empty array
  const [showModal, setShowModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null); // State for storing selected patient data

  useEffect(() => {
    // Fetch appointment data on component mount
    const fetchAppointments = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/appointment/all-appointments"
        );
        setPatients(res.data); // Corrected to res.data
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []);

  const openModal = (patient) => {
    setSelectedPatient(patient); // Set the clicked patient's data
    setShowModal(true); // Show the modal
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPatient(null); // Clear the selected patient when modal closes
  };

  return (
    <div className="overflow-x-auto mx-5 my-5 ">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            {/* Table Headers */}
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900 ">
              #
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900 ">
              Name
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900 ">
              Age
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900 ">
              Email
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900 ">
              Gender
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900 ">
              Date
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900 ">
              Time
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900 ">
              Doctor
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900 ">
              Disease
            </th>

            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900 "></th>
          </tr>
        </thead>
        <tbody>
          {/* Ensure patients is an array before mapping */}
          {patients && patients.length > 0 ? (
            patients.map((patient, idx) => (
              <tr key={patient.id}>
                <td className="py-4 border-b text-sm text-gray-700 text-center">
                  {idx + 1}
                </td>
                <td className="py-4 border-b text-sm text-gray-700 text-center">
                  {patient.name}
                </td>
                <td className="py-4 border-b text-sm text-gray-700 text-center">
                  {patient.age}
                </td>
                <td className="py-4 border-b text-sm text-gray-700 text-center">
                  {patient.user.email}
                </td>
                <td className="py-4 border-b text-sm text-gray-700 text-center">
                  {patient.user.gender}
                </td>
                <td className="py-4 border-b text-sm text-gray-700 text-center">
                  {new Date(patient.date).toLocaleDateString("en-CA")}
                </td>
                <td className="py-4 border-b text-sm text-gray-700 text-center">
                  {patient.time}
                </td>
                <td className="flex items-center py-4 border-b text-sm text-gray-700 text-center">
                  <img
                    src={"https://via.placeholder.com/50"}
                    alt="doc"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  {patient.doctor.firstName}
                </td>
                <td className="py-4 border-b text-sm text-gray-700 text-center">
                  {patient.disease}
                </td>

                <td className="py-4 border-b text-sm text-gray-700 text-center">
                  <div className="flex">
                    <img
                      src={Action1}
                      alt="action"
                      onClick={() => openModal(patient)} // Pass the patient data to modal
                      className="cursor-pointer"
                    />
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="11" className="text-center py-4">
                No appointments available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <AppointMentDetailModal
        show={showModal}
        onClose={closeModal}
        patient={selectedPatient} // Pass selected patient data to the modal
      />
    </div>
  );
};

export default AppointmentTable;
