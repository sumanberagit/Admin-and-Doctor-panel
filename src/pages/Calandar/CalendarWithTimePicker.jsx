import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "tailwindcss/tailwind.css";
import BaseLayout from "../../layouts/BaseLayout";

Modal.setAppElement("#root");

const AttendanceCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dailyAttendance, setDailyAttendance] = useState([]);
  const [apLeave, setApLeave] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("17:00");
  const [timeRanges, setTimeRanges] = useState({}); // To store time ranges for each date

  const today = new Date();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const populateMonthDropdown = () => {
    return monthNames.map((month, index) => (
      <option key={index} value={index}>
        {month}
      </option>
    ));
  };

  const populateYearDropdown = () => {
    const currentYear = today.getFullYear();
    const previousYears = [
      currentYear - 2,
      currentYear - 1,
      currentYear,
      currentYear + 1,
      currentYear + 2,
      currentYear + 3,
      currentYear + 4,
      currentYear + 5,
    ];
    return previousYears.map((year) => (
      <option key={year} value={year}>
        {year}
      </option>
    ));
  };

  const getAttendanceStatus = (day, month, year) => {
    // Your existing logic for fetching attendance or leave data
    return { status: "Absent" };
  };

  const generateCalendar = (month, year) => {
    const firstDay = new Date(year, month).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const prevMonthDays = new Date(year, month, 0).getDate();

    const offset = firstDay === 0 ? 6 : firstDay - 1;

    const dates = [];

    // Previous month's trailing days
    for (let i = offset; i > 0; i--) {
      dates.push(
        <div
          key={`prev-${i}`}
          className="w-1/7 bg-gray-200 text-gray-500 py-2 text-center"
        >
          {prevMonthDays - i + 1}
        </div>
      );
    }

    // Current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      const dateKey = `${year}-${month}-${day}`;
      const hasTimeRange = timeRanges[dateKey];
      const eventClass = hasTimeRange
        ? "bg-green-100 border-l-4 border-green-500"
        : "bg-red-100 border-l-4 border-red-500";
      const eventText = "";
      const timeText = hasTimeRange
        ? `${timeRanges[dateKey].startTime} - ${timeRanges[dateKey].endTime}`
        : "";

      dates.push(
        <div
          key={day}
          className={`w-1/7 p-2 text-center h-[100px] flex flex-col justify-center ${eventClass} cursor-pointer`}
          onClick={() => handleDateClick(day, month, year)}
        >
          <div>{day}</div>
          <div>{eventText}</div>
          <div>{timeText}</div>
        </div>
      );
    }

    return dates;
  };

  const handleDateClick = (day, month, year) => {
    setSelectedDate(new Date(year, month, day));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleTimeSave = () => {
    if (startTime && endTime && selectedDate) {
      const dateKey = `${selectedDate.getFullYear()}-${selectedDate.getMonth()}-${selectedDate.getDate()}`;
      setTimeRanges((prevRanges) => ({
        ...prevRanges,
        [dateKey]: { startTime, endTime },
      }));
      setIsModalOpen(false); // Close modal after saving time range
    } else {
      alert("Please select both start and end time");
    }
  };

  useEffect(() => {
    // Fetch or set your attendance data here
    setDailyAttendance([]);
    setApLeave([]);
  }, []);

  const handleMonthChange = (e) => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), parseInt(e.target.value), 1)
    );
  };

  const handleYearChange = (e) => {
    setCurrentDate(
      new Date(parseInt(e.target.value), currentDate.getMonth(), 1)
    );
  };

  return (
    <BaseLayout>
      <div className="w-full p-4 bg-white rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Attendance</h3>
          <div className="flex items-center">
            <button
              className="text-lg"
              onClick={() =>
                setCurrentDate(
                  new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth() - 1,
                    1
                  )
                )
              }
            >
              &larr;
            </button>
            <button
              className="text-lg ml-2"
              onClick={() =>
                setCurrentDate(
                  new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth() + 1,
                    1
                  )
                )
              }
            >
              &rarr;
            </button>
            <select
              className="ml-4 border-none"
              value={currentDate.getMonth()}
              onChange={handleMonthChange}
            >
              {populateMonthDropdown()}
            </select>
            <select
              className="ml-2 border-none"
              value={currentDate.getFullYear()}
              onChange={handleYearChange}
            >
              {populateYearDropdown()}
            </select>
          </div>
        </div>

        {/* Calendar */}
        <div className="grid grid-cols-7 gap-4">
          <div className="text-center bg-gray-800 text-white py-2">Mon</div>
          <div className="text-center bg-gray-800 text-white py-2">Tue</div>
          <div className="text-center bg-gray-800 text-white py-2">Wed</div>
          <div className="text-center bg-gray-800 text-white py-2">Thu</div>
          <div className="text-center bg-gray-800 text-white py-2">Fri</div>
          <div className="text-center bg-gray-800 text-white py-2">Sat</div>
          <div className="text-center bg-gray-800 text-white py-2">Sun</div>
        </div>
        <div className="grid grid-cols-7 gap-4 mt-4 ">
          {generateCalendar(currentDate.getMonth(), currentDate.getFullYear())}
        </div>

        {/* Modal for Time Selection */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          className="bg-white p-6 rounded-lg max-w-md mx-auto my-20"
          overlayClassName="bg-gray-500 bg-opacity-75 fixed inset-0"
        >
          <h2 className="text-2xl font-semibold mb-4">Select Time Range</h2>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">
              Start Time:
            </label>
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">End Time:</label>
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex justify-end">
            <button
              onClick={closeModal}
              className="bg-gray-300 text-white px-4 py-2 rounded-md mr-2"
            >
              Cancel
            </button>
            <button
              onClick={handleTimeSave}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Save
            </button>
          </div>
        </Modal>
      </div>
    </BaseLayout>
  );
};

export default AttendanceCalendar;
