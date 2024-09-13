import React, { useState, useEffect } from "react";
import axios from "axios";
import Action1 from "../../../../assets/icons/Action1.svg";
import Action4 from "../../../../assets/icons/Action4.svg";
import Action5 from "../../../../assets/icons/Action5.svg";
import PatientsViewModal from "./Modal/PatientsViewModal";
import PatientsEditModal from "./Modal/PatientsEditModal";
import DeleteModal from "../../../../components/ConformtaionModal/DeleteModal";

const PatientsTable = () => {
  const [patients, setPatients] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  // Fetch patients data from API
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get(
          "https://consultant-backend-jiwv.onrender.com/public/patient"
        );
        setPatients(response.data.patients); // Assuming the API returns { patients: [] }
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    };

    fetchPatients();
  }, []);

  const openViewModal = (patient) => {
    setSelectedPatient(patient);
    setShowModal(true);
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // Format date to 'MM/DD/YYYY'
  };

  const openEditModal = () => setShowModal2(true); // Define this function
  const closeEditModal = () => setShowModal2(false); // Define this function
  const openDeleteModal = () => setShowModal3(true); // Define this function
  const closeDeleteModal = () => setShowModal3(false); // Define this function

  const closeModal = () => setShowModal(false);
  const closeModal2 = () => setShowModal2(false);
  const closeModal3 = () => setShowModal3(false);

  return (
    <div className="overflow-x-auto mx-5 my-5">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">
              Id
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">
              Name
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">
              Age
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">
              Gender
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">
              Blood Group
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">
              Address
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">
              Mobile No
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">
              Date
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900"></th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <tr key={index}>
              <td className="py-4 border-b text-sm text-gray-700 text-center">
                {index + 1}
              </td>
              {/* <td className="flex flex-row items-center py-4 border-b text-sm text-gray-700 text-center"> */}
              <td className="py-4 border-b text-sm text-gray-700 text-center">
                {patient.name}
              </td>
              <td className="py-4 border-b text-sm text-gray-700 text-center">
                {patient.age}
              </td>
              <td className="py-4 border-b text-sm text-gray-700 text-center">
                {patient.gender}
              </td>
              <td className="py-4 border-b text-sm text-gray-700 text-center">
                {patient.blood_group}
              </td>
              <td className="py-4 border-b text-sm text-gray-700 text-center">
                {patient.location}
              </td>
              <td className="py-4 border-b text-sm text-gray-700 text-center">
                {patient.phone}
              </td>
              <td className="py-4 border-b text-sm text-gray-700 text-center">
                {formatDate(patient.createdAt)}
              </td>
              <td className="py-4 border-b text-sm text-gray-700 text-center">
                <div className="flex flex-row">
                  <img
                    src={Action1}
                    alt="View"
                    className="cursor-pointer"
                    onClick={() => openViewModal(patient)}
                  />
                  <img
                    src={Action4}
                    alt="Edit"
                    className="cursor-pointer"
                    onClick={openEditModal} // Use openEditModal here
                  />
                  <img
                    src={Action5}
                    alt="Delete"
                    className="cursor-pointer"
                    onClick={openDeleteModal} // Use openDeleteModal here
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <PatientsViewModal
        show={showModal}
        onClose={closeModal}
        patient={selectedPatient}
      />
      <PatientsEditModal show={showModal2} onClose={closeEditModal} />
      <DeleteModal show={showModal3} onClose={closeDeleteModal} />
    </div>
  );
};

export default PatientsTable;
