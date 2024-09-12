import React, { useState } from "react";
import BaseLayout from "../../../layouts/BaseLayout";
import ProfileCard from "./Components/ProfileCard";
import ProfileControll from "./Components/ProfileControll";
import InvoiceModal from "./Components/Modal/InvoiceModal";

const Profile = () => {
  const [showModal, setShowModal] = useState(false);

  const showinvoice = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <BaseLayout>
      <div className="mx-5 flex justify-between">
        <h3 className="py-2 font-bold text-gray-700 text-lg">
          Patient Profile
        </h3>
      </div>

      <div className="flex flex-row justify-center gap-10 mt-5 mx-5">
        <ProfileCard />
        <ProfileControll showinvoice={showinvoice} />
      </div>
      <InvoiceModal show={showModal} onClose={closeModal} />
    </BaseLayout>
  );
};

export default Profile;
