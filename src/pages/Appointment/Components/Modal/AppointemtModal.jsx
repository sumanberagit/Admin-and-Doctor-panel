import React from 'react';

const AppointemtModal = ({ show, onClose }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full relative">
                <div className=' flex '>

                    <button
                        onClick={onClose}
                        className="absolute top-2 mt-6 mr-5 text-2xl  right-2 text-gray-500 hover:text-gray-700"
                    >
                        &#10005;
                    </button>
                    <h2 className="text-2xl font-bold mb-6">Book an Appointment</h2>
                </div>
                <form>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Patient Name <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                placeholder="Patient Name :"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Your Email <span className="text-red-500">*</span></label>
                            <input
                                type="email"
                                placeholder="Your email :"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Departments</label>
                            <select
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option>Eye Care</option>
                                <option>Cardiology</option>
                                <option>Neurology</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Doctor</label>
                            <select
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option>Dr. Calvin Carlo</option>
                                <option>Dr. Jane Doe</option>
                                <option>Dr. John Smith</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Your Phone <span className="text-red-500">*</span></label>
                            <input
                                type="tel"
                                placeholder="Your Phone :"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Date</label>
                            <input
                                type="date"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Time</label>
                            <input
                                type="time"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-gray-700">Comments <span className="text-red-500">*</span></label>
                            <textarea
                                placeholder="Your Message :"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                rows="4"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                    >
                        Book An Appointment
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AppointemtModal;
