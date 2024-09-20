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
  const [showModal, setShowModal] = useState(false);

  const showinvoice = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/patient/${patientId}`
        ); // Adjust API endpoint as necessary
        setPatientData(response.data.data);
        console.log("............", response.data.data.name);
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    };

    fetchPatientData();
  }, [patientId]);

  return (
    <BaseLayout>
      <div className="mx-5 flex justify-between">
        <h3 className="py-2 font-bold text-gray-700 text-lg">
          Patient Profile
        </h3>
      </div>

      <div className="flex flex-row justify-center gap-10 mt-5 mx-5">
        {patientData && <ProfileCard patientData={patientData} />}{" "}
        {/* Pass patientData to ProfileCard */}
        <ProfileControll showinvoice={showinvoice} />
      </div>
      <InvoiceModal show={showModal} onClose={closeModal} />
    </BaseLayout>
  );
};

export default Profile;
