import React from "react";
import BaseLayout from "../../../layouts/BaseLayout";
import "./AddDoctor.css";

const AddDoctor = () => {
  return (
    <BaseLayout>
      <div className="min-h-screen bg-gray-50 p-4 mb-16">
        {/* Header */}
        <div className=" mx-5 flex justify-between">
          <h3 className=" py-2 font-bold text-gray-700 text-lg">
            Complete Your Profile
          </h3>
        </div>

        {/* Main Content */}
        <div className="flex justify-center">
          {/* Form Container */}
          <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
            <div className="flex items-center mb-6">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="https://img.freepik.com/premium-photo/default-striking-portrait-young-male-doctor-his-arms_1273023-7346.jpg?w=740"
                  alt="Doctor Picture"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="ml-4">
                <label className="text-lg font-semibold">
                  Upload your picture
                </label>
                <p className="text-gray-500 text-sm mb-2">
                  For best results, use an image at least 600px by 600px in
                  either .jpg or .png format
                </p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                  Upload
                </button>
                <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 ml-2">
                  Remove
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-600">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full mt-2 p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-600">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full mt-2 p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-600">Your Email</label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full mt-2 p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-600">Phone no.</label>
                <input
                  type="text"
                  placeholder="Phone no."
                  className="w-full mt-2 p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-600">Departments</label>
                <select className="w-full mt-2 p-2 border rounded">
                  <option>Eye Care</option>
                  <option>Cardiology</option>
                  <option>Orthopedic</option>
                  <option>Gastroenterology</option>
                  <option>Psychiatry</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-600">Gender</label>
                <select className="w-full mt-2 p-2 border rounded">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              {/* Social Media Fields */}
              <div>
                <label className="block text-gray-600">Instagram</label>
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full mt-2 p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-600">Facebook</label>
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full mt-2 p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-600">LinkedIn</label>
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full mt-2 p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-600">Twitter</label>
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full mt-2 p-2 border rounded"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-gray-600">Your Bio Here</label>
              <textarea
                placeholder="Your Bio Here"
                className="w-full mt-2 p-2 border rounded"
                rows="4"
              ></textarea>
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4">
              Add Doctor
            </button>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default AddDoctor;
