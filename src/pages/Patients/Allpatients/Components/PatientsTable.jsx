import React, { useState, useEffect } from "react";
import axios from "axios";
import Action1 from "../../../../assets/icons/Action1.svg";
import PatientsViewModal from "./Modal/PatientsViewModal";
import PatientsEditModal from "./Modal/PatientsEditModal";
import DeleteModal from "../../../../components/ConformtaionModal/DeleteModal";
import { useNavigate } from "react-router-dom";

const PatientsTable = () => {
  const [patients, setPatients] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state for the entire page
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const navigate = useNavigate();

  // Fetch patients data from API
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get(
          "https://consultant-backend-jiwv.onrender.com/public/patient"
        );
        setPatients(response.data.patients); // Assuming the API returns { patients: [] }
        setIsLoading(false); // Stop loading after data is fetched
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

  const openEditModal = () => setShowModal2(true);
  const closeEditModal = () => setShowModal2(false);
  const openDeleteModal = () => setShowModal3(true);
  const closeDeleteModal = () => setShowModal3(false);

  const closeModal = () => setShowModal(false);
  const closeModal2 = () => setShowModal2(false);
  const closeModal3 = () => setShowModal3(false);

  // Filtered patients based on search term
  const filteredPatients = patients.filter((patient) => {
    return (
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Fullscreen Loader
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
    <div>
      {/* Show the loader if loading is true */}
      {isLoading ? (
        loader
      ) : (
        <div className="overflow-x-auto mx-5 my-5">
          <div className="flex justify-end mb-4">
            <input
              type="text"
              placeholder="Search by name or address"
              className="border border-gray-300 rounded p-2 w-100"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
            />
          </div>

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
              {filteredPatients.map((patient, index) => (
                <tr key={index}>
                  <td className="py-4 border-b text-sm text-gray-700 text-center">
                    {index + 1}
                  </td>
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
                        alt=""
                        onClick={() =>
                          navigate(`/patientprofile/${patient._id}`)
                        }
                        className="cursor-pointer"
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
      )}
    </div>
  );
};

export default PatientsTable;
