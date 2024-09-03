import React from 'react'
import PatientReview from '../PatientsReview/PatientReview';
import '../../../../App.css'

const Appointment = () => {
    const patients = [
        { name: "Calvin Carlo", bookingDate: "27th Nov, 2020", image: "https://via.placeholder.com/50", status: "accepted" },
        { name: "Joya Khan", bookingDate: "27th Nov, 2020", image: "https://via.placeholder.com/50", status: "rejected" },
        { name: "Amelia Muli", bookingDate: "27th Nov, 2020", image: "https://via.placeholder.com/50", status: "accepted" },
        { name: "Nik Ronaldo", bookingDate: "27th Nov, 2020", image: "https://via.placeholder.com/50", status: "accepted" },
        { name: "Crista Joseph", bookingDate: "27th Nov, 2020", image: "https://via.placeholder.com/50", status: "rejected" },
    ];
    return (
        // <div className='flex flex-row '>
        <div className="flex row space-x-4 mx-5 ">
            <div className="p-6 bg-white rounded-lg shadow-md w-96 mb-10">
                <div className="flex justify-between items-center mb-4 border-b py-3">
                    <h2 className="text-lg font-semibold">
                        <span role="img" aria-label="calendar" className="mr-2">📅</span>
                        Latest Appointment
                    </h2>
                    <span className="text-gray-500">55 Patients</span>
                </div>
                <ul className='doctor-card-scroll'>
                    {patients.map((patient, index) => (
                        <li key={index} className="flex items-center justify-between py-2  last:border-b-0">
                            <div className="flex items-center">
                                <img src={patient.image} alt={patient.name} className="w-10 h-10 rounded-full mr-4" />
                                <div>
                                    <p className="font-medium">{patient.name}</p>
                                    <p className="text-gray-500 text-sm">Booking on {patient.bookingDate}</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <button className={`w-8 h-8 rounded-full ${patient.status === "accepted" ? "bg-green-100 text-green-500" : "bg-red-100 text-red-500"}`}>
                                    {patient.status === "accepted" ? "✓" : "✕"}
                                </button>
                                <button className={`w-8 h-8 rounded-full ${patient.status === "rejected" ? "bg-red-100 text-red-500" : "bg-green-100 text-green-500"}`}>
                                    {patient.status === "accepted" ? "✕" : "✓"}
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        // </div>
    )
}

export default Appointment