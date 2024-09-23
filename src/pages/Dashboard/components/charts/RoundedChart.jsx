import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useSelector } from "react-redux";
import axios from "axios";

const yearOptions = [2022, 2021];
const RoundedChart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userType = useSelector((state) => state.setUserType);
  const userId = useSelector((state) => state.setUserId);
  const [totalAppointments, setTotalAppointments] = useState(0);
  const [totalLabel, setTotalLabel] = useState("Total");

  const [chartOptions, setChartOptions] = useState({
    series: [0, 0, 0],
    options: {
      chart: {
        height: 400,
        type: "radialBar",
        events: {
          dataPointMouseEnter: function (event, chartContext, config) {
            // On hover, show the percentage for the hovered gender
            const hoveredSeries = config.w.config.series[config.dataPointIndex];
            setTotalLabel(`${hoveredSeries}%`);
          },
          dataPointMouseLeave: function () {
            // When not hovering, show the total count of appointments
            setTotalLabel(totalAppointments);
          },
        },
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
            },
            value: {
              fontSize: "16px",
            },
            total: {
              show: true,
              label: "Total",
              formatter: function () {
                return totalLabel; // Dynamically set the label based on hover or total count
              },
            },
          },
        },
      },
      labels: ["Male", "Female", "Others"],
    },
  });

  // Fetch appointments based on userType
  useEffect(() => {
    const fetchAppointments = async () => {
      let apiUrl = "";
      if (userType === 1) {
        apiUrl =
          "https://consultant-backend-jiwv.onrender.com/appointment/all-appointments";
      } else if (userType === 2) {
        apiUrl = `https://consultant-backend-jiwv.onrender.com/doctor/${userId}/appointments`;
      }

      try {
        const response = await axios.get(apiUrl);
        const appointments = response.data;

        // Process the gender data
        const genderCounts = { male: 0, female: 0, others: 0 };
        appointments.forEach((appointment) => {
          const gender = appointment.user.gender.toLowerCase();
          if (gender === "male") genderCounts.male++;
          else if (gender === "female") genderCounts.female++;
          else genderCounts.others++;
        });

        const total =
          genderCounts.male + genderCounts.female + genderCounts.others;
        setTotalAppointments(total); // Set total appointments

        const malePercentage = ((genderCounts.male / total) * 100).toFixed(2);
        const femalePercentage = ((genderCounts.female / total) * 100).toFixed(
          2
        );
        const othersPercentage = ((genderCounts.others / total) * 100).toFixed(
          2
        );

        // Update the chart data
        setChartOptions((prevOptions) => ({
          ...prevOptions,
          series: [malePercentage, femalePercentage, othersPercentage],
        }));
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, [userType, userId]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (year) => {
    setIsOpen(false);
    // Additional logic for year selection if needed
  };

  return (
    <div className="my-8">
      <div className="flex justify-between mx-3">
        <h3 className="text-lg font-bold items-center justify-center flex">
          Appointment by Gender
        </h3>
        <div className="custom-dropdown">
          <div
            role="button"
            onClick={toggleDropdown}
            className="px-3 py-2 light-bg-L border border-[#667fd1] head-6 green-H flex items-center gap-2 rounded-lg"
          >
            <p>Year</p>
            <ChevronDownIcon className="w-5 h-5" />
          </div>

          {isOpen && (
            <div
              className="dropdown-list-container dropdown-end light-bg-L dark-M body-N p-2 shadow rounded-box"
              style={{ width: "140px" }}
            >
              <ul className="dropdown-list">
                {yearOptions?.map((el, idx) => (
                  <li
                    role="button"
                    key={idx}
                    onClick={() => handleSelect(el)}
                    className="cursor-pointer hover:bg-gray-200 p-2 rounded"
                  >
                    {el}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div id="chart">
        <ReactApexChart
          options={chartOptions.options}
          series={chartOptions.series}
          type="radialBar"
          height={400}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default RoundedChart;
