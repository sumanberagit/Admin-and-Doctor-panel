import React, { useState } from "react";
import AppointmentTable from "./Components/AppointmentTable";
import BaseLayout from "../../layouts/BaseLayout";
import AppointemtModal from "./Components/Modal/AppointemtModal";

const Appointment = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  return (
    <BaseLayout>
      <div className="">
        <div className=" mx-5 flex justify-between">
          <h3 className=" py-2 font-bold text-gray-700 text-lg">Appointment</h3>
          <button className="bg-blue-500 text-white font-bold  px-2 w-86 rounded hover:bg-blue-600" onClick={openModal}>

            Appointment
          </button>
        </div>
        <div className="">
          <AppointmentTable />
        </div>
      </div>
      <AppointemtModal show={showModal} onClose={closeModal} />
    </BaseLayout>
  );
};

export default Appointment;
