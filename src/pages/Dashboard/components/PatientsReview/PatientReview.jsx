import React from 'react'
import reviewlogo from '../../../../assets/images/Icon.png'
import '../../../../App.css'

const PatientReview = () => {
    const doctors = [
        { name: "Dr. Calvin Carlo", specialty: "Orthopedic", reviews: 45, rating: 5, patients: 150, image: "https://via.placeholder.com/50" },
        { name: "Dr. Cristino Murphy", specialty: "Gynecology", reviews: 75, rating: 5, patients: 350, image: "https://via.placeholder.com/50" },
        { name: "Dr. Alia Reddy", specialty: "Psychotherapy", reviews: 48, rating: 5, patients: 450, image: "https://via.placeholder.com/50" },
        { name: "Dr. Toni Kover", specialty: "Dentist", reviews: 84, rating: 5, patients: 484, image: "https://via.placeholder.com/50" },
        { name: "Dr. Toni Kover", specialty: "Dentist", reviews: 84, rating: 5, patients: 484, image: "https://via.placeholder.com/50" },
        { name: "Dr. Todni Kover", specialty: "Dendtist", reviews: 84, rating: 5, patients: 484, image: "https://via.placeholder.com/50" },
    ];
    return (
        <div className="p-6 bg-white rounded-lg shadow-md mb-10 w-96 doctor-card">
            <div className="flex justify-between items-center border-b py-3">
                <h2 className="text-lg font-semibold flex items-center">
                    <img src={reviewlogo} alt='' />
                    &nbsp;
                    Patients Reviews
                </h2>

            </div>
            <ul className='doctor-card-scroll'>
                {doctors.map((doctor, index) => (
                    <li key={index} className="flex items-center justify-between py-4 ">
                        <div className="flex items-center">
                            <img src={doctor.image} alt={doctor.name} className="w-12 h-12 rounded-full mr-4" />
                            <div>
                                <p className="font-medium">{doctor.name}</p>
                                <p className="text-gray-500 text-sm">{doctor.specialty}</p>
                                <div className="text-yellow-400 flex items-center">
                                    {"★".repeat(doctor.rating)}
                                    <span className="text-gray-500 ml-2">({doctor.reviews})</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-gray-700">{doctor.patients} Patients</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PatientReview