import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../../../App.css";

const QueryListing = () => {
  // State to hold patient queries
  const [patients, setPatients] = useState([]);

  // Fetch patient queries from API
  useEffect(() => {
    const fetchPatientQueries = async () => {
      try {
        const response = await axios.get("http://localhost:8080/userquery");
        // Assuming the API returns an array of patient queries
        setPatients(response.data);
      } catch (error) {
        console.error("Error fetching patient queries:", error);
      }
    };

    fetchPatientQueries();
  }, []);

  return (
    <div className="flex row space-x-4 mx-5 ">
      <div className="p-6 bg-white rounded-lg shadow-md w-96 mb-10">
        <div className="flex justify-between items-center mb-4 border-b py-3">
          <h2 className="text-lg font-semibold">
            <span role="img" aria-label="calendar" className="mr-2"></span>
            All User's Queries
          </h2>
          <span className="text-gray-500">{patients.length} Queries</span>
        </div>
        <ul className="doctor-card-scroll">
          {patients.map((patient, index) => (
            <li
              key={index}
              className="flex items-center justify-between py-2 last:border-b-0"
            >
              <div className="flex items-center">
                <img
                  src={patient.image || "https://via.placeholder.com/50"} // Fallback image if API doesn't provide one
                  alt={patient.name}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <p className="font-medium">{patient.name}</p>
                  <p className="text-sky-500 text-sm">{patient.message}</p>
                </div>
              </div>
              {/* Add status buttons or other elements here if needed */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QueryListing;
