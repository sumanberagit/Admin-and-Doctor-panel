import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BaseLayout from "../../../layouts/BaseLayout";
import ProfileCard from "./Components/ProfileCard";
import ProfileControll from "./Components/ProfileControll";
import InvoiceModal from "./Components/Modal/InvoiceModal";
import axios from "axios";

const Profile = () => {
  const { patientId } = useParams(); // Get the patient ID from the route
  const [patientData, setPatientData] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Loading state for the entire page
  const [showModal, setShowModal] = useState(false);

  const showinvoice = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const response = await axios.get(
          `https://consultant-backend-jiwv.onrender.com/patient/${patientId}`
        );
        setPatientData(response.data.data);
        setIsLoading(false); // Stop loading once data is fetched
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    };

    fetchPatientData();
  }, [patientId]);

  // Fullscreen Loader
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

  return (
    <BaseLayout>
      {/* Show the loader if loading is true */}
      {isLoading ? (
        loader
      ) : (
        <>
          <div className="mx-5 flex justify-between">
            <h3 className="py-2 font-bold text-gray-700 text-lg">
              Patient Profile
            </h3>
          </div>

          <div className="flex flex-row justify-center gap-10 mt-5 mx-5">
            {patientData && <ProfileCard patientData={patientData} />}
            <ProfileControll showinvoice={showinvoice} />
          </div>

          <InvoiceModal show={showModal} onClose={closeModal} />
        </>
      )}
    </BaseLayout>
  );
};

export default Profile;
