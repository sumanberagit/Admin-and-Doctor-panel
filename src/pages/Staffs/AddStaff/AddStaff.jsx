import React, { useState } from "react";
import BaseLayout from "../../../layouts/BaseLayout";
import axios from "axios";
import "./AddStaff.css";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const AddStaff = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    Departments: "",
    Gender: "",
    bio: "",
    image: null,
  });

  // State to hold response or error messages
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create form data for multipart form submission
    const data = new FormData();
    data.append("firstName", formData.firstName);
    data.append("lastName", formData.lastName);
    data.append("email", formData.email);
    data.append("contact", formData.contact);
    data.append("Departments", formData.Departments);
    data.append("Gender", formData.Gender);
    data.append("bio", formData.bio);
    if (formData.image) {
      data.append("image", formData.image);
    }

    try {
      // Send POST request to API
      const response = await axios.post(
        "http://localhost:8080/staff/add",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Handle success
      setMessage("Staff added successfully.");
      console.log(response.data); // Optional: log response data
    } catch (error) {
      // Handle errors
      setMessage(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    }
  };

  return (
    <BaseLayout>
      <div className="min-h-screen bg-gray-50 mb-16">
        {/* Header */}
        <div className="mx-5 flex justify-between">
          <h3 className="py-2 font-bold text-gray-700 text-lg">
            Complete The Profile
          </h3>
        </div>

        {/* Main Content */}
        <div className="flex justify-center">
          {/* Form Container */}
          <form
            className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div className="flex items-center mb-8">
              <input
                id="imgUpload"
                type="file"
                hidden
                onChange={handleFileChange}
              />
              <label htmlFor="imgUpload" className="cursor-pointer">
                <img
                  src={
                    formData.image
                      ? URL.createObjectURL(formData.image)
                      : "https://via.placeholder.com/600"
                  }
                  alt="Profile"
                  className="w-24 h-24 rounded-full mr-6 hover:opacity-80"
                />
              </label>
              <div className="flex flex-col">
                <h2 className="text-xl font-bold">Upload your picture</h2>
                <span className="text-sm text-gray-500">
                  For best results, use an image at least 600px by 600px in
                  either .jpg or .png format
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-600">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  className="w-full mt-2 p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  className="w-full mt-2 p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your email"
                  className="w-full mt-2 p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600">Phone no.</label>
                <PhoneInput
                  name="contact"
                  value={formData.contact}
                  onChange={(contact) => setFormData(contact)}
                  placeholder="Phone no."
                  className="w-full mt-2 p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600">Departments</label>
                <select
                  name="Departments"
                  value={formData.Departments}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-2 border rounded"
                  required
                >
                  <option value="">Select Department</option>
                  <option value="Nurse">Nurse</option>
                  <option value="Medical technologists">
                    Medical technologists
                  </option>
                  <option value="Pharmacist">Pharmacist</option>
                  <option value="Social Worker">Social Worker</option>
                  <option value="Patient Advocates">Patient Advocates</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-600">Gender</label>
                <select
                  name="Gender"
                  value={formData.Gender}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-2 border rounded"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-gray-600">Your Bio Here</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                placeholder="Your Bio Here"
                className="w-full mt-2 p-2 border rounded"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4"
            >
              Add Staff
            </button>
            {message && <p className="mt-4 text-red-500">{message}</p>}
          </form>
        </div>
      </div>
    </BaseLayout>
  );
};

export default AddStaff;
