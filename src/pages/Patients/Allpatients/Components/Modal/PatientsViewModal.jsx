import React from "react";

const PatientsViewModal = ({ show, onClose, patient }) => {
  if (!show) return null;
  if (!patient) return null; // Ensure patient data exists

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
        <div className="flex border-b mb-3">
          <button
            onClick={onClose}
            className="absolute top-2 mt-4 mr-5 text-2xl right-2 text-gray-500 hover:text-gray-700"
          >
            &#10005;
          </button>
          <h2 className="text-2xl font-bold mb-6">Profile</h2>
        </div>
        <div className="flex items-center mb-4">
          <img
            src="https://via.placeholder.com/50"
            alt="img"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h3 className="text-lg font-semibold">{patient.name}</h3>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <p className="font-semibold">Age:</p>
            <p className="text-gray-500">{patient.age} years old</p>
          </div>
          <div>
            <p className="font-semibold">Date:</p>
            <p className="text-gray-500">{patient.createdAt}</p>
          </div>
          <div>
            <p className="font-semibold">Gender:</p>
            <p className="text-gray-500">{patient.gender}</p>
          </div>
          <div>
            <p className="font-semibold">Address:</p>
            <p className="text-gray-500">{patient.location}</p>
          </div>
          <div>
            <p className="font-semibold">Mobile No:</p>
            <p className="text-gray-500">{patient.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientsViewModal;
