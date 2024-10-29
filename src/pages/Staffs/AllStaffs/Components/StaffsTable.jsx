import React, { useState, useEffect } from "react";
import Action1 from "../../../../assets/icons/Action1.svg";
import Action4 from "../../../../assets/icons/Action4.svg";
import Action5 from "../../../../assets/icons/Action5.svg";
import StaffsEditModal from "./Modal/StaffsEditModal";
import StaffsViewModal from "./Modal/StaffsViewModal";
import DeleteModal from "../../../../components/ConformtaionModal/DeleteModal";
import axios from "axios";
import { useSelector } from "react-redux";

const StaffsTable = () => {
  const [staffs, setStaffs] = useState([]);
  const [filteredStaffs, setFilteredStaffs] = useState([]); // For filtered staffs
  const [searchQuery, setSearchQuery] = useState(""); // For search input
  const [selectedStaff, setSelectedStaff] = useState(null); // For holding the selected staff
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state
  const userType = useSelector((state) => state.setUserType);

  // Open and close modals
  const openModal = (staff) => {
    setSelectedStaff(staff);
    setShowModal(true);
  };
  const closeModal = () => setShowModal(false);
  const openModal2 = () => setShowModal2(true);
  const closeModal2 = () => setShowModal2(false);
  const openModal3 = () => setShowModal3(true);
  const closeModal3 = () => setShowModal3(false);

  // Loader component
  const loader = (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
      <svg
        className="animate-spin h-32 w-32 text-blue-500"
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
    // Fetch staff data from API
    const fetchStaffs = async () => {
      try {
        const response = await axios.get(
          "https://consultant-backend-jiwv.onrender.com/staff/all-staff"
        );
        if (response.data.success && Array.isArray(response.data.staff)) {
          setStaffs(response.data.staff);
          setFilteredStaffs(response.data.staff); // Initialize filtered staffs
        } else {
          console.error("Unexpected response format:", response.data);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching staff data:", error);
        setLoading(false);
      }
    };

    fetchStaffs();
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter staff based on name or email
    const filtered = staffs.filter(
      (staff) =>
        staff.firstName.toLowerCase().includes(query) ||
        staff.email.toLowerCase().includes(query)
    );
    setFilteredStaffs(filtered);
  };

  // Show loader if data is loading
  if (loading) {
    return loader;
  }

  return (
    <div className="overflow-x-auto mx-5 my-5">
      {/* Search input */}
      <div className="flex justify-end mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search by name or email"
          className="border border-gray-300 p-2 rounded-md"
        />
      </div>

      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">
              No
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">
              Name
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">
              Email
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">
              Contact
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">
              Department
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">
              Gender
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">
              Status
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">
              Created At
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredStaffs.map((staff, index) => (
            <tr key={staff._id}>
              <td className="py-4 border-b text-sm text-gray-700 text-center">
                {index + 1}
              </td>
              <td className="py-4 border-b text-sm text-gray-700 text-center">
                {staff.firstName} {staff.lastName}
              </td>
              <td className="py-4 border-b text-sm text-gray-700 text-center">
                {staff.email}
              </td>
              <td className="py-4 border-b text-sm text-gray-700 text-center">
                {staff.contact}
              </td>
              <td className="py-4 border-b text-sm text-gray-700 text-center">
                {staff.Departments}
              </td>
              <td className="py-4 border-b text-sm text-gray-700 text-center">
                {staff.Gender}
              </td>
              <td className="py-4 border-b text-sm text-gray-700 text-center">
                {staff.status}
              </td>
              <td className="py-4 border-b text-sm text-gray-700 text-center">
                {new Date(staff.createdAt).toLocaleDateString()}
              </td>
              <td className="py-4 border-b text-sm text-gray-700 text-center">
                <div className="flex flex-row">
                  <img
                    src={Action1}
                    alt="View"
                    className="cursor-pointer"
                    onClick={() => openModal(staff)} // Pass staff data to modal
                  />
                  {userType === 1 && (
                    <>
                      <img
                        src={Action4}
                        alt="Edit"
                        className="cursor-pointer"
                        onClick={openModal2}
                      />
                      <img
                        src={Action5}
                        alt="Delete"
                        className="cursor-pointer"
                        onClick={openModal3}
                      />
                    </>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Conditionally render modals based on userType */}
      {userType === 1 && (
        <>
          <StaffsEditModal show={showModal2} onClose={closeModal2} />
          <DeleteModal show={showModal3} onClose={closeModal3} />
        </>
      )}
      <StaffsViewModal
        show={showModal}
        onClose={closeModal}
        staff={selectedStaff}
      />
    </div>
  );
};

export default StaffsTable;
