// DoctorProfile.js
import React, { useState } from "react";
import BaseLayout from "../../../layouts/BaseLayout";
import "./DoctorProfile.css";
import Experience from "./components/Experience";
import TimeTable from "./components/TimeTable";
import TeamMemberCard from "./components/TeamMemberCard";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Icon from "../../../assets/images/users-vector-icon-png_260862.jpg";

// Sample team member data
const teamMembers = [
  {
    id: 1,
    name: "Jessica McFarlane",
    title: "M.B.B.S, Dentist",
    location: "63, PG Shustoke, UK",
    time: "Mon: 2:00PM - 6:00PM",
    price: "$75 USD / Visit",
    imgSrc:
      "https://img.freepik.com/premium-photo/default-striking-portrait-young-male-doctor-his-arms_1273023-7346.jpg?w=740",
  },
  {
    id: 2,
    name: "Jessica McFarlane",
    title: "M.B.B.S, Dentist",
    location: "63, PG Shustoke, UK",
    time: "Mon: 2:00PM - 6:00PM",
    price: "$75 USD / Visit",
    imgSrc:
      "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?t=st=1725011031~exp=1725014631~hmac=6d3f4a7f242a032c9b1c7ecfb629da83c7cd1bbadf2079abb93098e60da4c7f9&w=826",
  },
  {
    id: 1,
    name: "Jessica McFarlane",
    title: "M.B.B.S, Dentist",
    location: "63, PG Shustoke, UK",
    time: "Mon: 2:00PM - 6:00PM",
    price: "$75 USD / Visit",
    imgSrc:
      "https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?t=st=1725011324~exp=1725014924~hmac=4d57cfcdecc6401b1c565bcbdb513ca0b48e6685b3176bbe900510581f417f80&w=826",
  },
  {
    id: 1,
    name: "Jessica McFarlane",
    title: "M.B.B.S, Dentist",
    location: "63, PG Shustoke, UK",
    time: "Mon: 2:00PM - 6:00PM",
    price: "$75 USD / Visit",
    imgSrc:
      "https://img.freepik.com/free-photo/doctor-presenting-something-isolated-white-background_1368-5834.jpg?t=st=1725011294~exp=1725014894~hmac=fe58505997ac5a5768ef1335f74352d5e376187eac1b01eed898aca2903aff76&w=740",
  },
  // Add more team members as needed
];

const DoctorProfile = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const location = useLocation();
  const doctor = location.state?.doctor || {}; // Extract passed doctor data

  return (
    <BaseLayout>
      <div className="min-h-screen bg-white mb-20">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <div className="mx-5 flex justify-between">
            <h3 className="py-2 font-bold text-gray-700 text-lg">
              Doctor Profile & Settings
            </h3>
          </div>
        </div>

        <div className="relative flex flex-col rounded-md">
          {/* Blue Section */}
          <div className="relative linear-blue h-24 rounded-md">
            {/* Doctor Image */}
            <div className="absolute -bottom-19 left-6 flex items-center z-20">
              <div className="rounded-full overflow-hidden w-24 h-24">
                <img
                  src={Icon}
                  alt={doctor.firstName + " " + doctor.lastName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-6 mt-24">
                <h1 className="head-5">
                  {doctor.firstName + " " + doctor.lastName}
                </h1>
                <p className="doctor-category text-brownL">
                  {doctor.Departments}
                </p>
              </div>
            </div>
          </div>

          {/* White Section */}
          <div className="mt-16 bg-white p-6">
            <nav className="flex ">
              {["Overview", "Experience", "Time Table", "Settings"].map(
                (tab, index) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 text-sm font-medium py-3.5 transition duration-300 ${
                      activeTab === tab
                        ? "bg-blue-500 text-white"
                        : "bg-grayM text-black hover:bg-blue-100 hover:text-blue-500"
                    } ${index === 0 ? "rounded-l-md " : ""} ${
                      index === 3 ? "rounded-r-md " : ""
                    }`}
                  >
                    {tab}
                  </button>
                )
              )}
            </nav>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 bg-white">
          {activeTab === "Overview" && (
            <>
              <div className="mb-4 text-grayL doctor-category">
                <p>Overview - -</p>
              </div>
              <div className="mb-6">
                <h2 className="mb-2 head-6">
                  Specialties: {doctor.Departments}
                </h2>
                <ul className="list-disc list-inside text-gray-700">
                  <li>{doctor.bio || "No specialties available."}</li>
                </ul>
              </div>

              {/* My Team Section */}
              <div>
                <h2 className="head-6 mb-4">My Team:</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
                  {teamMembers.map((member) => (
                    <TeamMemberCard key={member.id} member={member} />
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Content for Other Tabs */}
          {activeTab === "Experience" && (
            <div>
              <Experience />
            </div>
          )}
          {activeTab === "Reviews" && <div>Reviews content goes here...</div>}
          {activeTab === "Time Table" && (
            <div>
              <TimeTable />
            </div>
          )}
          {activeTab === "Settings" && <div>Settings content goes here...</div>}
        </div>
      </div>
    </BaseLayout>
  );
};

export default DoctorProfile;
