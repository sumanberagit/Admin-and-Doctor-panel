import React, { useState } from "react";
import Action1 from '../../../assets/icons/Action1.svg'
import Action2 from '../../../assets/icons/Action2.svg'
import Action3 from '../../../assets/icons/Action3.svg'
import AppointMentDetailModal from "./Modal/AppointMentDetailModal";


const patients = [
  {
    id: 1,
    name: "Howard Tanner",
    email: "howard@contact.com",
    age: 25,
    gender: "Male",
    department: "Cardiology",
    date: "13th Sep 2023",
    time: "11:00AM",
    doctor: "Dr. Calvin",
    doctorImage: "https://randomuser.me/api/portraits/men/1.jpg",
    fees: "$ 300",
  },
  {
    id: 2,
    name: "Wendy Filson",
    email: "wendy@contact.com",
    age: 28,
    gender: "Female",
    department: "Gynecology",
    date: "29th Nov 2023",
    time: "11:00AM",
    doctor: "Dr. Cristino Murphy",
    doctorImage: "https://randomuser.me/api/portraits/men/2.jpg",
    fees: "$ 300",
  },
  // Add the rest of the patient data here...
];

const AppointmentTable = () => {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  return (
    <div className="overflow-x-auto mx-5 my-5 ">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900 ">
              #
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900 ">
              Name
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900 ">
              Email
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900 ">
              Age
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900 ">
              Gender
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900 ">
              Department
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900 ">
              Date
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900 ">
              Time
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900 ">
              Doctor
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900 ">
              Fess
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900 ">

            </th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td className=" py-4 border-b text-sm text-gray-700 tex text-center">
                {patient.id}
              </td>
              <td className=" flex flex-row items-center mr-2 py-4 border-b text-sm text-gray-700 text-center">
                <img
                  src="https://via.placeholder.com/50"
                  alt="img"
                  className="w-12 h-12 rounded-full mr-4"
                />
                {patient.name}
              </td>
              <td className=" py-4 border-b text-sm text-gray-700 text-center">
                {patient.email}
              </td>
              <td className=" py-4 border-b text-sm text-gray-700 text-center">
                {patient.age}
              </td>
              <td className=" py-4 border-b text-sm text-gray-700 text-center">
                {patient.gender}
              </td>
              <td className=" py-4 border-b text-sm text-gray-700 text-center">
                {patient.department}
              </td>
              <td className=" py-4 border-b text-sm text-gray-700 text-center">
                {patient.date}
              </td>
              <td className=" py-4 border-b text-sm text-gray-700 text-center">
                {patient.time}
              </td>
              <td className=" flex flex-row py-4 border-b items-center text-sm text-gray-700 text-center">
                <img
                  src="https://via.placeholder.com/50"
                  alt="img"
                  className="w-12 h-12 rounded-full mr-4"
                />
                {patient.doctor}
              </td>



              <td className=" py-4 border-b text-sm text-gray-700 text-center">
                {patient.fees}
              </td>
              <td className=" py-4 border-b text-sm text-gray-700 text-center">
                <div className=" flex flex-row">
                  <img src={Action1} alt="" onClick={openModal} className=" cursor-pointer" />
                  {/* <img src={Action2} alt="" />
                  <img src={Action3} alt="" /> */}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <AppointMentDetailModal show={showModal} onClose={closeModal} />
    </div>
  );
};

export default AppointmentTable;
