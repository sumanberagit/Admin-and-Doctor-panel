import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const yearOptions = [2022, 2021];
const RoundedChart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chartOptions, setChartOptions] = useState({
    series: [55, 67, 10],
    options: {
      chart: {
        height: 400,
        type: "radialBar",
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
              formatter: function (w) {
                return 249;
              },
            },
          },
        },
      },
      labels: ["Male", "Female", "Others"],
    },
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (year) => {
    setIsOpen(false);
  };

  return (
    <div className=" my-8">
      <div className="flex justify-between mx-3">
        <h3 className=" text-lg font-bold items-center justify-center flex">
          Patients visit by Gender
        </h3>
        <div className="custom-dropdown ">
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
