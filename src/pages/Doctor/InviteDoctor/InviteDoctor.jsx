import React, { useState } from "react";
import BaseLayout from "../../../layouts/BaseLayout";
import axios from "axios";
import "./InviteDoctor.css";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const InviteDoctor = () => {
  // State for form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset error and success messages
    setError(null);
    setSuccess(null);

    setLoading(true); // Set loading to true when the request is made

    try {
      // Make API request to send the invitation
      const response = await axios.post("http://localhost:8080/invite-doctor", {
        firstName,
        lastName,
        email,
        contact,
      });

      if (response.data) {
        setSuccess("Doctor invitation sent successfully!");
        setFirstName("");
        setLastName("");
        setEmail("");
        setContact("");
      }
    } catch (err) {
      setError("Failed to send invitation. Please try again.");
    }

    setLoading(false); // Set loading to false after the request completes
  };

  return (
    <BaseLayout>
      <div className="min-h-screen bg-gray-50 p-4 mb-16">
        {/* Header */}
        {/* <div className="mx-5 flex justify-center">
          <h3 className="py-2 font-bold text-gray-700 text-lg" id="header">
            Invite New Doctor
          </h3>
        </div> */}

        {/* Main Content */}
        <div className="flex justify-center p-14">
          {/* Form Container */}
          <div className="bg-white shadow-md rounded-lg p-10 w-full max-w-3xl">
            <form onSubmit={handleSubmit}>
              <div className=" flex justify-center">
                <h3
                  className="py-2 font-bold text-gray-700 text-lg"
                  id="header"
                >
                  Invite New Doctor
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-5">
                <div>
                  <label className="block text-gray-600">First Name</label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    className="w-full mt-2 p-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-600">Last Name</label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    className="w-full mt-2 p-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-600">Your Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="w-full mt-2 p-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-600">Phone no.</label>
                  <PhoneInput
                    defaultCountry="india"
                    value={contact}
                    onChange={(contact) => setContact(contact)}
                    placeholder="Phone no."
                    className="w-full mt-2 p-2 border rounded"
                    required
                  />
                </div>
              </div>

              {/* Error and Success Messages */}
              {error && <p className="text-red-500 mt-4">{error}</p>}
              {success && <p className="text-green-500 mt-4">{success}</p>}

              {/* Submit Button */}
              <button
                type="submit"
                className={`${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                } text-white py-2 px-4 rounded mt-4 flex justify-center items-center`}
                disabled={loading} // Disable the button when loading
              >
                {loading ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
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
                ) : (
                  "Invite Doctor"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default InviteDoctor;
