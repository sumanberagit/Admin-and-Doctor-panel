import React, { useState } from "react";
import file from "../../../../assets/svgs/file.svg";
import cardiogram from "../../../../assets/svgs/cardio.svg";
import checkup from "../../../../assets/svgs/checkup.svg";
import covid from "../../../../assets/svgs/Covid.svg";
import dentist from "../../../../assets/svgs/dentist.svg";
import eye from "../../../../assets/svgs/Eye.svg";
import orthopedic from "../../../../assets/svgs/Orthopedic.svg";
import InvoiceModal from "./Modal/InvoiceModal";

const imageMap = {
  Cardiogram: cardiogram,
  Checkup: checkup,
  "Covid Test": covid,
  Dentist: dentist,
  "Eye Test": eye,
  Orthopedic: orthopedic,
};
const ProfileControll = ({ showinvoice }) => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-20">
        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200">
          <span
            className={`w-full py-4 text-center ${
              activeTab === "profile"
                ? "text-white bg-blue-600"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("profile")}
          >
            Profile
          </span>
          {/* <button
          className={`w-1/2 py-4 text-center ${activeTab === "settings" ? "text-white bg-blue-600" : "text-gray-600"
            }`}
          onClick={() => setActiveTab("settings")}
        >
          Profile Settings
        </button> */}
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {activeTab === "profile" && (
            <div>
              <h3 className="text-lg font-semibold">Introduction:</h3>
              <p className="text-sm text-gray-600 mt-2">
                Web designers to occupy the space which will later be filled
                with 'real' content. This is required when, for example, the
                final text is not yet available. Dummy text is also known as
                'fill text'. Dummy texts have been in use by typesetters since
                the 16th century.
              </p>

              {/* Appointment and Payment Lists */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                {/* Appointment List */}
                <div>
                  <h4 className="text-md font-semibold">Appointment List</h4>
                  <ul className="mt-4 space-y-4">
                    {[
                      {
                        name: "Cardiogram",
                        doctor: "Dr. Calvin Carlo",
                        date: "10 Dec",
                      },
                      {
                        name: "Checkup",
                        doctor: "Dr. Cristino Murphy",
                        date: "12 Dec",
                      },
                      {
                        name: "Covid Test",
                        doctor: "Dr. Alia Reddy",
                        date: "13 Dec",
                      },
                      {
                        name: "Dentist",
                        doctor: "Dr. Toni Kovar",
                        date: "15 Dec",
                      },
                      {
                        name: "Eye Test",
                        doctor: "Dr. Jessica McFarlane",
                        date: "17 Dec",
                      },
                      {
                        name: "Orthopedic",
                        doctor: "Dr. Elsie Sherman",
                        date: "18 Dec",
                      },
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex justify-between items-center bg-gray-50 p-4 rounded-md shadow-sm"
                      >
                        <img
                          src={imageMap[item.name]}
                          alt={item.name}
                          className="w-8 h-8 mr-4"
                        />
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-gray-600">{item.doctor}</p>
                        </div>
                        <span className="text-gray-500">{item.date}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Payment List */}
                <div>
                  <h4 className="text-md font-semibold">Payment List</h4>
                  <ul className="mt-4 space-y-4">
                    {[
                      { name: "Cardiogram", status: "Full bill paid" },
                      { name: "Checkup", status: "Full bill paid" },
                      { name: "Covid Test", status: "Full bill paid" },
                      { name: "Dentist", status: "Full bill paid" },
                      { name: "Eye Test", status: "Full bill paid" },
                      { name: "Orthopedic", status: "Full bill paid" },
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex justify-between items-center bg-gray-50 p-4 rounded-md shadow-sm"
                      >
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-gray-600">{item.status}</p>
                        </div>
                        <div className="" onClick={showinvoice}>
                          <img src={file} alt="file" />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Contact Us Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
                <div className="bg-gray-50 p-4 rounded-md shadow-sm flex items-center">
                  <div className="text-blue-500 text-4xl mr-4">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <p className="text-lg font-medium">New Messages</p>
                    <p className="text-blue-600 text-sm">Read more →</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-md shadow-sm flex items-center">
                  <div className="text-blue-500 text-4xl mr-4">
                    <i className="fas fa-file-alt"></i>
                  </div>
                  <div>
                    <p className="text-lg font-medium">Latest Proposals</p>
                    <p className="text-blue-600 text-sm">View more →</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileControll;
