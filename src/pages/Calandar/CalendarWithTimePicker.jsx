import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "tailwindcss/tailwind.css";
import BaseLayout from "../../layouts/BaseLayout";
import axios from "axios"; // Import axios for API calls
import { useSelector } from "react-redux";

Modal.setAppElement("#root");

const AttendanceCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dailyAttendance, setDailyAttendance] = useState([]);
  const [apLeave, setApLeave] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("17:00");
  const [timeRanges, setTimeRanges] = useState({});
  const [dateTimes, setDateTimes] = useState({});

  const token = useSelector((state) => state.token);

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

  useEffect(() => {
    const fetchCheckupDates = async () => {
      try {
        const response = await axios.get(
          "https://consultant-backend-jiwv.onrender.com/doctor/dates",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (
          response.data.success &&
          Array.isArray(response.data.datesAndTimes)
        ) {
          const fetchedData = {};

          response.data.datesAndTimes.forEach((item) => {
            const date = new Date(item.date);
            const adjustedDate = new Date(
              date.getTime() - date.getTimezoneOffset() * 60000
            );
            const dateKey = adjustedDate.toISOString().split("T")[0];

            const timeRanges = item.timeRanges.map((timeRange) => ({
              startTime: timeRange.startTime,
              endTime: timeRange.endTime,
            }));

            const checkupTimes = item.checkupTimes || [];
            const checkupTimeRanges = (item.checkupTimes || []).map(
              (checkup) => ({
                startTime: checkup.startTime,
                endTime: checkup.endTime,
              })
            );
            fetchedData[dateKey] = [...timeRanges, ...checkupTimeRanges];
          });

          setDateTimes(fetchedData);

          // Log the start and end times to check if the data is coming
          Object.keys(fetchedData).forEach((date) => {
            console.log("date", date);

            fetchedData[date].forEach((timeSlot) => {
              console.log("Start Time:", timeSlot.startTime);
              console.log("End Time:", timeSlot.endTime);
              const endDate = console.log();
              // Set start and end times in state
              setStartTime(timeSlot.startTime);
              setEndTime(timeSlot.endTime);
            });
          });
        } else {
          console.error("Unexpected response structure");
        }
      } catch (error) {
        console.error("Error fetching dates: ", error);
      }
    };

    fetchCheckupDates();
  }, [token]);

  // Use another useEffect to log when the state changes
  useEffect(() => {
    console.log("Updated Start Time:", startTime);
    console.log("Updated End Time:", endTime);
  }, [startTime, endTime]);

  const getAttendanceStatus = (day, month, year) => {
    return { status: "Absent" };
  };

  const generateCalendar = (month, year) => {
    const firstDay = new Date(year, month).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const prevMonthDays = new Date(year, month, 0).getDate();

    const offset = firstDay === 0 ? 6 : firstDay - 1;
    const dates = [];

    // Previous month's days
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
      const dateKey = `${year}-${(month + 1).toString().padStart(2, "0")}-${day
        .toString()
        .padStart(2, "0")}`; // Format date as YYYY-MM-DD

      const hasTimeRanges = dateTimes[dateKey];

      const eventClass = hasTimeRanges
        ? "bg-green-100 border-l-4 border-green-500"
        : "bg-red-100 border-l-4 border-red-500"; // Green for dates with times, Red for others

      // Display all time ranges if they exist
      const timeText = hasTimeRanges
        ? hasTimeRanges
            .map((range) => `${range.startTime} - ${range.endTime}`)
            .join(", ")
        : "";

      dates.push(
        <div
          key={day}
          className={`w-1/7 p-2 text-center h-[100px] flex flex-col justify-center ${eventClass} cursor-pointer`}
          onClick={() => handleDateClick(day, month, year)}
        >
          <div>{day}</div>
          {timeText && <div className="text-sm">{timeText}</div>}{" "}
          {/* Display time ranges */}
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

  // Function to save selected time range and send to API
  // Function to save selected time range and send to API
  // Function to save selected time range and send to API
  const handleTimeSave = async () => {
    if (startTime && endTime && selectedDate) {
      const currentDate = new Date();
      if (selectedDate < currentDate) {
        alert("Cannot set time for a past date.");
        return;
      }

      // Create UTC date for start time
      const [startHour, startMinute] = startTime.split(":");
      const startDateTimeUTC = new Date(
        Date.UTC(
          selectedDate.getFullYear(),
          selectedDate.getMonth(),
          selectedDate.getDate(),
          startHour,
          startMinute
        )
      );

      // Create UTC date for end time
      const [endHour, endMinute] = endTime.split(":");
      const endDateTimeUTC = new Date(
        Date.UTC(
          selectedDate.getFullYear(),
          selectedDate.getMonth(),
          selectedDate.getDate(),
          endHour,
          endMinute
        )
      );

      // Format the payload
      const payload = {
        date: startDateTimeUTC.toISOString().split("T")[0], // Date in UTC format
        timeRanges: [
          {
            startTime: startDateTimeUTC
              .toISOString()
              .split("T")[1]
              .substring(0, 5), // HH:mm
            endTime: endDateTimeUTC.toISOString().split("T")[1].substring(0, 5), // HH:mm
          },
        ],
      };

      try {
        const response = await axios.post(
          "https://consultant-backend-jiwv.onrender.com/doctor/set-checkup-times",
          payload,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("API response: ", response.data);

        // Replace the existing time range for the selected date
        const dateKey = startDateTimeUTC.toISOString().split("T")[0]; // Date key in YYYY-MM-DD format
        setDateTimes((prev) => ({
          ...prev,
          [dateKey]: [
            {
              startTime: payload.timeRanges[0].startTime,
              endTime: payload.timeRanges[0].endTime,
            },
          ], // Replace existing ranges
        }));

        setIsModalOpen(false); // Close modal after saving
        // Reset times after saving
        setStartTime("09:00");
        setEndTime("17:00");
      } catch (error) {
        console.error(
          "Error setting checkup time: ",
          error.response ? error.response.data : error
        );
        alert(
          error.response?.data.message ||
            "Failed to save checkup time. Please try again."
        );
      }
    } else {
      alert("Please select both start and end time");
    }
  };

  useEffect(() => {
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
          <h3 className="text-lg font-semibold">Set Future Check-Up Time</h3>
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
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">End Time:</label>
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div className="flex justify-end">
            <button
              onClick={handleTimeSave}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg mr-2"
            >
              Save
            </button>
            <button
              onClick={closeModal}
              className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </Modal>
      </div>
    </BaseLayout>
  );
};

export default AttendanceCalendar;
