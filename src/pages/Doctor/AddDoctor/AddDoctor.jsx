import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken, setUserType } from "../../../redux/Reducer/AuthReducer";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const AddDoctor = () => {
  const { id } = useParams(); // Get the ID from URL parameters
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    Departments: "",
    Gender: "",
    bio: "",
    instagram: "",
    facebook: "",
    linkedIn: "",
    twitter: "",
  });

  const [experienceFields, setExperienceFields] = useState([""]); // State to handle experience fields

  const [message, setMessage] = useState(""); // State for messages
  const [messageType, setMessageType] = useState(""); // State for message type ('success' or 'error')
  const [loading, setLoading] = useState(false); // State for loader and button disable

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle Experience input change
  const handleExperienceChange = (index, value) => {
    const newExperienceFields = [...experienceFields];
    newExperienceFields[index] = value;
    setExperienceFields(newExperienceFields);
  };

  // Add another Experience field
  const addExperienceField = () => {
    setExperienceFields([...experienceFields, ""]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading and disable the button
    try {
      const response = await axios.post(
        `https://consultant-backend-jiwv.onrender.com/doctor/doctor-register/${id}`,
        { ...formData, experience: experienceFields } // Send formData with experience fields
      );
      setMessage("Doctor added successfully!"); // Set success message
      setMessageType("success"); // Set message type to success
      dispatch(setUserType(response.data.doctor.userType));
      console.log(">>>>>>>>>>>>>>>", response.data.doctor.userType);
      navigate("/dashboard");
    } catch (error) {
      setMessage("There was an error registering the doctor."); // Set error message
      setMessageType("error"); // Set message type to error
    } finally {
      setLoading(false); // Stop loading and enable the button again
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 mb-16">
      <div className="mx-5 flex justify-between">
        <h3 className="py-2 font-bold text-gray-700 text-lg">
          Complete Your Profile
        </h3>
      </div>
      <div className="flex justify-center">
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
                For best results, use an image at least 600px by 600px in either
                .jpg or .png format
              </p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Upload
              </button>
              <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 ml-2">
                Remove
              </button>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-600">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full mt-2 p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-600">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-full mt-2 p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-600">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="w-full mt-2 p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-600">Phone no.</label>
                <PhoneInput
                  defaultCountry="india"
                  name="phone"
                  value={formData.phone}
                  onChange={(phone) => setFormData(phone)}
                  placeholder="Phone no."
                  className="w-full mt-2 p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-600">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full mt-2 p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-600">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  className="w-full mt-2 p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-600">Departments</label>
                <select
                  name="Departments"
                  value={formData.Departments}
                  onChange={handleChange}
                  className="w-full mt-2 p-2 border rounded"
                >
                  <option value="">Select Department</option>
                  <option>Eye Care</option>
                  <option>Cardiology</option>
                  <option>Orthopedic</option>
                  <option>Gastroenterology</option>
                  <option>Psychiatry</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-600">Gender</label>
                <select
                  name="Gender"
                  value={formData.Gender}
                  onChange={handleChange}
                  className="w-full mt-2 p-2 border rounded"
                >
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-600">Instagram</label>
                <input
                  type="text"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  placeholder="Username"
                  className="w-full mt-2 p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-600">Facebook</label>
                <input
                  type="text"
                  name="facebook"
                  value={formData.facebook}
                  onChange={handleChange}
                  placeholder="Username"
                  className="w-full mt-2 p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-600">LinkedIn</label>
                <input
                  type="text"
                  name="linkedIn"
                  value={formData.linkedIn}
                  onChange={handleChange}
                  placeholder="Username"
                  className="w-full mt-2 p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-600">Twitter</label>
                <input
                  type="text"
                  name="twitter"
                  value={formData.twitter}
                  onChange={handleChange}
                  placeholder="Username"
                  className="w-full mt-2 p-2 border rounded"
                />
              </div>
            </div>

            {/* Experience Fields */}
            <div className="mt-6">
              <label className="block text-gray-600">Experience</label>
              {experienceFields.map((experience, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input
                    type="text"
                    value={experience}
                    onChange={(e) =>
                      handleExperienceChange(index, e.target.value)
                    }
                    placeholder={`Experience ${index + 1}`}
                    className="w-full mt-2 p-2 border rounded"
                  />
                  <button
                    type="button"
                    onClick={addExperienceField}
                    className="ml-2 bg-blue-500 text-white p-2 rounded"
                  >
                    +
                  </button>
                </div>
              ))}
            </div>

            {/* Bio */}
            <div className="mt-6">
              <label className="block text-gray-600">Bio</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Write your bio"
                className="w-full mt-2 p-2 border rounded"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>

            {/* Message */}
            {message && (
              <div
                className={`mt-4 p-2 text-center rounded ${
                  messageType === "success"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {message}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
