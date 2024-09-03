import React, { useState } from 'react'
import Action1 from '../../../../assets/icons/Action1.svg'
import Action4 from '../../../../assets/icons/Action4.svg'
import Action5 from '../../../../assets/icons/Action5.svg'
import PatientsViewModal from './Modal/PatientsViewModal';
import PatientsEditModal from './Modal/PatientsEditModal';
import DeleteModal from '../../../../components/ConformtaionModal/DeleteModal';

const patients = [
    {
        id: 1,
        name: "Howard Tanner",
        age: 25,
        gender: "Male",
        address: "Chandigarh",
        mobNo: '8018352784',
        department: "Cardiology",
        date: "13th Sep 2023",
        time: "11:00AM",
        status: "Approved",
        doctorImage: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        id: 2,
        name: "Howard Tanner",
        age: 25,
        gender: "Male",
        address: "Chandigarh",
        mobNo: '8018352784',
        department: "Cardiology",
        date: "13th Sep 2023",
        time: "11:00AM",
        status: "Approved",
        doctorImage: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        id: 3,
        name: "Howard Tanner",
        age: 25,
        gender: "Male",
        address: "Chandigarh",
        mobNo: '8018352784',
        department: "Cardiology",
        date: "13th Sep 2023",
        time: "11:00AM",
        status: "Approved",
        doctorImage: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        id: 4,
        name: "Howard Tanner",
        age: 25,
        gender: "Male",
        address: "Chandigarh",
        mobNo: '8018352784',
        department: "Cardiology",
        date: "13th Sep 2023",
        time: "11:00AM",
        status: "Approved",
        doctorImage: "https://randomuser.me/api/portraits/men/1.jpg",
    },

];

const PatientsTable = () => {
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);
    const openModal2 = () => setShowModal2(true);
    const closeModal2 = () => setShowModal2(false);
    const openModal3 = () => setShowModal3(true);
    const closeModal3 = () => setShowModal3(false);
    return (
        <div className="overflow-x-auto mx-5 my-5 ">
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">Id</th>
                        <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">Name</th>
                        <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">Age</th>
                        <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">Gender</th>
                        <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">Address</th>
                        <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">Mobile No</th>
                        <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">Department</th>
                        <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">Date</th>
                        <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">Time</th>
                        <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900">Staus</th>
                        <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-900"></th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map((patient) => (
                        <tr key={patient.id}>
                            <td className="py-4 border-b text-sm text-gray-700 text-center">{patient.id}</td>
                            <td className="flex flex-row items-center py-4 border-b text-sm text-gray-700 text-center">
                                <img
                                    src={patient.doctorImage}
                                    alt={`${patient.name} Image`}
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                {patient.name}
                            </td>
                            <td className="py-4 border-b text-sm text-gray-700 text-center">{patient.age}</td>
                            <td className="py-4 border-b text-sm text-gray-700 text-center">{patient.gender}</td>
                            <td className="py-4 border-b text-sm text-gray-700 text-center">{patient.address}</td>
                            <td className="py-4 border-b text-sm text-gray-700 text-center">{patient.mobNo}</td>
                            <td className="py-4 border-b text-sm text-gray-700 text-center">{patient.department}</td>
                            <td className="py-4 border-b text-sm text-gray-700 text-center">{patient.date}</td>
                            <td className="py-4 border-b text-sm text-gray-700 text-center">{patient.time}</td>
                            <td className="py-4 border-b text-sm text-gray-700 text-center">{patient.status}</td>
                            <td className=" py-4 border-b text-sm text-gray-700 text-center">
                                <div className=" flex flex-row">
                                    <img src={Action1} alt="" className=" cursor-pointer" onClick={openModal} />
                                    <img src={Action4} alt="" className=" cursor-pointer" onClick={openModal2} />
                                    <img src={Action5} alt="" className=" cursor-pointer" onClick={openModal3} />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <PatientsViewModal show={showModal} onClose={closeModal} />
            <PatientsEditModal show={showModal2} onClose={closeModal2} />
            <DeleteModal show={showModal3} onClose={closeModal3} />
        </div>

    )
}

export default PatientsTable