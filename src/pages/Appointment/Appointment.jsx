import React, { useState } from "react";
import AppointmentTable from "./Components/AppointmentTable";
import BaseLayout from "../../layouts/BaseLayout";
import AppointemtModal from "./Components/Modal/AppointemtModal";
import DoctorAppointmentTable from "./Components/DoctorAppointmentTable";
import { useSelector } from "react-redux";

const Appointment = () => {
  const [showModal, setShowModal] = useState(false);
  const token = useSelector((state) => state.token);
  const userType = useSelector((state) => state.setUserType);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <BaseLayout>
      <div className="">
        <div className="mx-5 flex justify-between">
          <h3 className="py-2 font-bold text-gray-700 text-lg">Appointment</h3>
          {userType === 1 && (
            <button
              className="bg-blue-500 text-white font-bold px-2 w-86 rounded hover:bg-blue-600"
              onClick={openModal}
            >
              Appointment
            </button>
          )}
        </div>
        <div className="">
          {userType === 1 ? <AppointmentTable /> : <DoctorAppointmentTable />}
        </div>
      </div>
    </BaseLayout>
  );
};

export default Appointment;
