import React from 'react'
import BaseLayout from '../../../layouts/BaseLayout'

const AddPatients = () => {
    return (
        <BaseLayout>
            <div className=" mx-5 flex justify-between">
                <h3 className=" py-2 font-bold text-gray-700 text-lg">Add New Patient</h3>
            </div>
            <div className="bg-white shadow-md rounded-lg p-8 w-full mt-5 ms-5 ">
                <div className="flex items-center mb-8">
                    <input id='imgUpload' type="file" hidden />
                    <label htmlFor="imgUpload" className="cursor-pointer">
                        <img
                            src="https://via.placeholder.com/600"
                            alt="Profile"
                            className="w-24 h-24 rounded-full mr-6 hover:opacity-80"
                        />
                    </label>
                    <div className="flex flex-col">
                        <h2 className="text-xl font-bold">Upload your picture</h2>
                        <span className="text-sm text-gray-500">
                            For best results, use an image at least 600px by 600px in either .jpg or .png format
                        </span>

                        <div className="flex space-x-4 mt-4">

                            <button type='file' className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                                Upload
                            </button>
                            <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-200">
                                Remove
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="firstName">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            placeholder="First Name :"
                            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="lastName">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            placeholder="Last Name :"
                            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Your email :"
                            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="phone">
                            Phone no.
                        </label>
                        <input
                            type="text"
                            id="phone"
                            placeholder="Phone no. :"
                            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="date">
                            Date
                        </label>
                        <input
                            type="date"
                            id="date"
                            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="departments">
                            Departments
                        </label>
                        <select
                            id="departments"
                            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option>Eye Care</option>
                            <option>Dental</option>
                            <option>Cardiology</option>
                        </select>
                    </div>
                </div>

                <button className="w-86 bg-blue-500 text-white px-4 py-3 rounded-md hover:bg-blue-600">
                    Add Patient
                </button>
            </div>
        </BaseLayout>
    )
}

export default AddPatients