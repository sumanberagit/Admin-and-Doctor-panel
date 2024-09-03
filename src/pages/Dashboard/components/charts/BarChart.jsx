import React, { useRef, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const yearOptions = [
    2022, 2021,
];
const BarChart = () => {

    const [isOpen, setIsOpen] = useState(false);



    const [chartOptions, setChartOptions] = useState({
        series: [
            {
                name: 'Net Profit',
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
            },
            {
                name: 'Revenue',
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
            },
            {
                name: 'Free Cash Flow',
                data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
            },
        ],
        options: {
            chart: {
                type: 'bar',
                height: 400,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded',
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent'],
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            },
            yaxis: {
                title: {
                    text: '$ (thousands)',
                },
            },
            fill: {
                opacity: 1,
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val + " thousands";
                    },
                },
            },
        },
    });

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (year) => {

        setIsOpen(false);
    };

    return (
        <div className='p-3 my-3'>
            <div className='flex justify-between'>
                <h3 className='text-lg font-bold items-center justify-center flex'>Patients visit by Gender</h3>
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
                        <div className="dropdown-list-container dropdown-end light-bg-L dark-M body-N p-2 shadow rounded-box" style={{ width: "140px" }}>
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
            <div id="chart" >
                <ReactApexChart
                    options={chartOptions.options}
                    series={chartOptions.series}
                    type="bar"
                    height={350}
                />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default BarChart;
