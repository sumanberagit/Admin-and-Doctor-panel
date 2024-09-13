import React from "react";
import Deletegif from "../../assets/gif/trash-bin.gif";

const DeleteModal = ({ show, onClose, onDelete }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 ">
      <div className="bg-white shadow-md rounded-lg p-12 max-w-md w-full  items-center text-center">
        {/* <div className='flex justify-between items-center border-b pb-3 mb-4'>
                    <h2 className="text-xl font-bold">Confirm Deletion</h2>
                    <button
                    
                        onClick={onClose}
                        className="text-2xl text-gray-500 hover:text-gray-700"
                    >
                        &#10005;
                    </button>
                </div> */}

        <div className="mb-6">
          <img
            src={Deletegif}
            alt="Delete Confirmation"
            className="w-24 h-24 mx-auto mb-4"
          />
          <p className="text-gray-700 mb-6">
            Are you sure you want to delete this item? This action cannot be
            undone.
          </p>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={onDelete}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Delete
          </button>
          <button
            onClick={onClose}
            className="bg-gray-200 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
