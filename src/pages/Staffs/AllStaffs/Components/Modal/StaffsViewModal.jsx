import React from "react";

const StaffsViewModal = ({ show, onClose, staff }) => {
  if (!show || !staff) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
        <div className=" flex  border-b mb-3">
          <button
            onClick={onClose}
            className="absolute top-2 mt-4 mr-5 text-2xl  right-2 text-gray-500 hover:text-gray-700"
          >
            &#10005;
          </button>
          <h2 className="text-2xl font-bold mb-6">Profile</h2>
        </div>
        <div className="flex items-center mb-4">
          <img
            src="https://via.placeholder.com/50"
            alt="Profile"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h3 className="text-lg font-semibold">
              {staff.firstName} {staff.lastName}
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <p className="font-semibold">Email:</p>
            <p className="text-gray-500">{staff.email}</p>
          </div>
          <div>
            <p className="font-semibold">Contact:</p>
            <p className="text-gray-500">{staff.contact}</p>
          </div>
          <div>
            <p className="font-semibold">Department:</p>
            <p className="text-gray-500">{staff.Departments}</p>
          </div>
          <div>
            <p className="font-semibold">Gender:</p>
            <p className="text-gray-500">{staff.Gender}</p>
          </div>
          <div>
            <p className="font-semibold">Status:</p>
            <p className="text-gray-500">{staff.status}</p>
          </div>
          <div>
            <p className="font-semibold">Created At:</p>
            <p className="text-gray-500">
              {new Date(staff.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffsViewModal;
