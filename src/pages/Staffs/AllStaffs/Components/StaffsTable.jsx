import React, { useState, useEffect } from "react";
import Action1 from "../../../../assets/icons/Action1.svg";
import Action4 from "../../../../assets/icons/Action4.svg";
import Action5 from "../../../../assets/icons/Action5.svg";
import StaffsEditModal from "./Modal/StaffsEditModal";
import StaffsViewModal from "./Modal/StaffsViewModal";
import DeleteModal from "../../../../components/ConformtaionModal/DeleteModal";
import axios from "axios";

const StaffsTable = () => {
  const [staffs, setStaffs] = useState([]);
  const [selectedStaff, setSelectedStaff] = useState(null); // For holding the selected staff
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

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

  useEffect(() => {
    // Fetch staff data from API
    const fetchStaffs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/staff/all-staff"
        );
        if (response.data.success && Array.isArray(response.data.staff)) {
          setStaffs(response.data.staff);
        } else {
          console.error("Unexpected response format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching staff data:", error);
      }
    };

    fetchStaffs();
  }, []);

  return (
    <div className="overflow-x-auto mx-5 my-5">
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
          {staffs.map((staff, index) => (
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
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <StaffsViewModal
        show={showModal}
        onClose={closeModal}
        staff={selectedStaff}
      />
      <StaffsEditModal show={showModal2} onClose={closeModal2} />
      <DeleteModal show={showModal3} onClose={closeModal3} />
    </div>
  );
};

export default StaffsTable;
