import React from "react";

const StaffsEditModal = ({ show, onClose }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Profile Setting</h2>
          <button
            onClick={onClose}
            className="text-2xl text-gray-500 hover:text-gray-700"
          >
            &#10005;
          </button>
        </div>

        <hr className=" mb-5" />

        <div className="flex items-center mb-6">
          <img
            src="https://via.placeholder.com/256"
            alt="Profile"
            className="w-20 h-20 rounded-full mr-4"
          />
          <div className="flex flex-col">
            <span className="text-sm text-gray-600 mb-2">
              For best results, use an image at least 256px by 256px in either
              .jpg or .png format
            </span>
            <div className="flex space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Upload
              </button>
              <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-300">
                Remove
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="First Name :"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name :"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your email :"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="phone"
            >
              Phone no.
            </label>
            <input
              type="text"
              id="phone"
              placeholder="Phone no. :"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="bio"
          >
            Your Bio Here
          </label>
          <textarea
            id="bio"
            placeholder="Bio :"
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          ></textarea>
        </div>

        <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Save changes
        </button>
      </div>
    </div>
  );
};

export default StaffsEditModal;
