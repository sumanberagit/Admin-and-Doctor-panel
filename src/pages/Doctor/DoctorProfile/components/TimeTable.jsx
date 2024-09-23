import React from "react";
import Telephone from "../../../../assets/icons/telephone.png";
import Mail from "../../../../assets/icons/mail.png";
import Time from "../../../../assets/icons/time.png";
import "../DoctorProfile.css";
const TimeTable = () => {
  const schedule = [
    { day: "Monday", time: "8.00 - 20.00" },
    { day: "Tuesday", time: "8.00 - 20.00" },
    { day: "Wednesday", time: "8.00 - 20.00" },
    { day: "Thursday", time: "8.00 - 20.00" },
    { day: "Friday", time: "8.00 - 20.00" },
    { day: "Saturday", time: "8.00 - 18.00" },
    { day: "Sunday", time: "8.00 - 14.00" },
  ];

  return (
    <div className="p-2 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6  items-center">
        <div className="p-6 rounded-md shadow-lg">
          <ul>
            {schedule.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center mb-4 text-gray-700"
              >
                <span className="flex items-center text-gray-700">
                  <img src={Time} alt="Time" className="h-4 w-4 mr-2" />
                  {item.day}
                </span>
                <span className="text-blue-500">{item.time}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:col-span-2 flex flex-col sm:flex-row justify-center items-center">
          <div className="flex flex-col items-center text-center mb-4 sm:mb-0 sm:mr-6">
            <span className="inline-block p-3 bg-blue-100 rounded-md mb-4">
              <img src={Telephone} alt="Telephone" className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-gray-600">
                Great doctor if you need your family member to get effective
                immediate assistance
              </p>
              <a href="tel:+152534468854" className="text-blue-600">
                +152 534-468-854
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="inline-block p-3 bg-blue-100 rounded-md mb-4">
              <img src={Mail} alt="Mail" className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-gray-600">
                Great doctor if you need your family member to get effective
                immediate assistance
              </p>
              <a href="mailto:contact@example.com" className="text-blue-600">
                contact@example.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeTable;
