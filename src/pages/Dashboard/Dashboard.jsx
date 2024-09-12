import React, { useState, useEffect } from "react";
import BaseLayout from "../../layouts/BaseLayout";
import Charts from "./components/charts/Charts";
import patients from "../../assets/icons/Patients.svg";
import cost from "../../assets/icons/cost.svg";
import staff from "../../assets/icons/staff.svg";
import Appointment from "../../assets/icons/appointment.svg";
import operation from "../../assets/icons/operations.svg";
import Appointments from "./components/appointment/Appointment";
import PatientReview from "./components/PatientsReview/PatientReview";
import QueryListing from "./components/queryListing/QueryListing";
import { useSelector } from "react-redux";
import axios from "axios";

const Dashboard = () => {
  const [counts, setCounts] = useState({
    pqueryCount: 0,
    patientCount: 0,
    staffCount: 0,
    appointmentCount: 0,
  });

  const userType = useSelector((state) => state.setUserType);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/counts/all-counts"
        );
        setCounts(response.data.counts);
        console.log(response.data.counts);
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <BaseLayout>
      <h3 className="mx-5 py-4 font-bold text-gray-700 text-lg">Dashboard</h3>
      <div className="flex space-x-4 mx-5 justify-center row">
        <div className=" rounded-md gap-5 w-[220px]  h-[140px] bg-white border border-gray-300 shadow-md flex items-center justify-center">
          <div className="flex items-center space-x-4">
            <img
              src={patients}
              alt="Patients"
              className="w-[60px] h-[60px] object-cover"
            />
            <div className=" text-left">
              <h4 className="text-xl font-bold text-black">
                {counts.patientCount}
              </h4>
              <h4 className="text-lg font-normal text-gray-500">Patients</h4>
            </div>
          </div>
        </div>
        <div className=" w-[220px] rounded-md gap-5 h-[140px] bg-white border border-gray-300 shadow-md flex items-center justify-center">
          <div className="flex items-center space-x-4">
            <img
              src={cost}
              alt="Avg Cost"
              className="w-[60px] h-[60px] object-cover"
            />
            <div className=" text-left">
              <h4 className="text-xl font-bold text-black">$1200</h4>
              <h4 className="text-lg font-normal text-gray-500">Avg.Cost</h4>
            </div>
          </div>
        </div>
        <div className="w-[220px] rounded-md  gap-5 h-[140px] bg-white border border-gray-300 shadow-md flex items-center justify-center">
          <div className="flex items-center space-x-4">
            <img
              src={staff}
              alt="Staff Members"
              className="w-[60px] h-[60px] object-cover"
            />
            <div className=" text-left">
              <h4 className="text-xl font-bold text-black">
                {counts.staffCount}
              </h4>
              <h4 className="text-lg font-normal text-gray-500">
                Staff Members
              </h4>
            </div>
          </div>
        </div>
        <div className="w-[220px] rounded-md  gap-5 h-[140px] bg-white border border-gray-300 shadow-md flex items-center justify-center">
          <div className="flex items-center space-x-4">
            <img
              src={Appointment}
              alt="Appointments"
              className="w-[60px] h-[60px] object-cover"
            />
            <div className=" text-left">
              <h4 className="text-xl font-bold text-black">
                {counts.appointmentCount}
              </h4>
              <h4 className="text-lg font-normal text-gray-500">Appointment</h4>
            </div>
          </div>
        </div>
        <div className="w-[220px] rounded-md gap-5 h-[140px] bg-white border border-gray-300 shadow-md flex items-center justify-center">
          <div className="flex items-center space-x-4">
            <img
              src={operation}
              alt="All Queries"
              className="w-[60px] h-[60px] object-cover"
            />
            <div className=" text-left">
              <h4 className="text-xl font-bold text-black">
                {counts.pqueryCount}
              </h4>
              <h4 className="text-lg font-normal text-gray-500">All Queries</h4>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-10">
        <Charts />
      </div>
      <div className=" flex flex-row mt-10 mb-10">
        <Appointments />
        <PatientReview />
        <QueryListing />
      </div>
    </BaseLayout>
  );
};

export default Dashboard;
