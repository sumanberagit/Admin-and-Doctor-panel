import React, { useState, useEffect } from "react";
import Action1 from "../../../assets/icons/Action1.svg";
import AppointMentDetailModal from "./Modal/AppointMentDetailModal";
import { useSelector } from "react-redux";
import axios from "axios";

const DoctorAppointmentTable = () => {
  const [appointments, setAppointments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const userType = useSelector((state) => state.setUserType);
  const userId = useSelector((state) => state.userId);
  const token = useSelector((state) => state.token);
  console.log(">>>>>>>>>>>>", userId);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        let response;
        if (userType === 1) {
          // Fetch all appointments for admin or userType 1
          response = await axios.get(
            "http://localhost:8080/appointment/all-appointments"
          );
        } else if (userType === 2) {
          // Fetch specific doctor's appointments for userType 2
          response = await axios.get(
            `http://localhost:8080/doctor/${userId}/appointments`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming token is stored in localStorage
              },
            }
          );

          // Ensure the userId from Redux matches the userId from the response data
          if (response.data.userId !== userId) {
            throw new Error("Unauthorized access");
          }
        }

        setAppointments(response.data); // Assuming response.data contains the appointments array
        setLoading(false); // Stop loading
      } catch (error) {
        console.error("Error fetching appointments:", error);
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [userType, userId]);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="overflow-x-auto mx-5 my-5 ">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">
              #
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">
              Name
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">
              Age
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">
              Email
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">
              Gender
            </th>
            {/* <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">
              Department
            </th> */}
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">
              Date
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">
              Time
            </th>
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">
              Doctor
            </th>
            {/* <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">
              Fees
            </th> */}
            <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900"></th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={appointment.id}>
              <td className="py-4 border-b text-sm text-gray-700 text-center">
                {index + 1}
              </td>
              <td className="flex flex-row items-center mr-2 py-4 border-b text-sm text-gray-700 text-center">
                <img
                  src={
                    appointment.patientImage || "https://via.placeholder.com/50"
                  }
                  alt="img"
                  className="w-12 h-12 rounded-full mr-4"
                />
                {appointment.name}
              </td>
              <td className="py-4 border-b text-sm text-gray-700 text-center">
                {appointment.age}
              </td>
              <td className="py-4 border-b text-sm text-gray-700 text-center">
                {appointment.user.email}
              </td>
              <td className="py-4 border-b text-sm text-gray-700 text-center">
                {appointment.user.gender}
              </td>
              {/* <td className="py-4 border-b text-sm text-gray-700 text-center">
                {appointment.department}
              </td> */}
              <td className="py-4 border-b text-sm text-gray-700 text-center">
                {appointment.date}
              </td>
              <td className="py-4 border-b text-sm text-gray-700 text-center">
                {appointment.time}
              </td>
              <td className="flex flex-row py-4 border-b items-center text-sm text-gray-700 text-center">
                <img
                  src={
                    appointment.doctorImage || "https://via.placeholder.com/50"
                  }
                  alt="img"
                  className="w-12 h-12 rounded-full mr-4"
                />
                {appointment.doctor.firstName + appointment.doctor.lastName}
              </td>
              {/* <td className="py-4 border-b text-sm text-gray-700 text-center">
                {appointment.fees}
              </td> */}
              <td className="py-4 border-b text-sm text-gray-700 text-center">
                <div className="flex flex-row">
                  <img
                    src={Action1}
                    alt=""
                    onClick={openModal}
                    className="cursor-pointer"
                  />
                  {/ Additional actions if necessary /}
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

export default DoctorAppointmentTable;
