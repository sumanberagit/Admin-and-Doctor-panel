import React from "react";
import BaseLayout from "../../../layouts/BaseLayout";
import './DoctorList.css'
import { useNavigate } from "react-router-dom";
const doctors = [
  { name: "Calvin Carlo", specialty: "Eye Care", image: "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=1024x1024&w=is&k=20&c=eWLlDOBpK-cQh5EAUwgmfr6FR1o3VWPXVVjVMJt9lVo=" },
  { name: "Cristino Murphy", specialty: "Gynecology", image: "https://img.freepik.com/free-photo/doctor-presenting-something-isolated-white-background_1368-5834.jpg?t=st=1725011294~exp=1725014894~hmac=fe58505997ac5a5768ef1335f74352d5e376187eac1b01eed898aca2903aff76&w=740" },
  { name: "Alia Reddy", specialty: "Psychotherapy", image: "https://img.freepik.com/premium-photo/default-striking-portrait-young-male-doctor-his-arms_1273023-7346.jpg?w=740" },
  { name: "Toni Kovar", specialty: "Orthopedic", image: "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?t=st=1725011031~exp=1725014631~hmac=6d3f4a7f242a032c9b1c7ecfb629da83c7cd1bbadf2079abb93098e60da4c7f9&w=826" },
  { name: "Jessica McFarlane", specialty: "Dentist", image: "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?t=st=1725011031~exp=1725014631~hmac=6d3f4a7f242a032c9b1c7ecfb629da83c7cd1bbadf2079abb93098e60da4c7f9&w=826" },
  { name: "Megan Smith", specialty: "Cardiology", image: "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?t=st=1725011031~exp=1725014631~hmac=6d3f4a7f242a032c9b1c7ecfb629da83c7cd1bbadf2079abb93098e60da4c7f9&w=826" },
  { name: "John Doe", specialty: "Neurology", image: "https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?t=st=1725011324~exp=1725014924~hmac=4d57cfcdecc6401b1c565bcbdb513ca0b48e6685b3176bbe900510581f417f80&w=826" },
  { name: "Jane Roe", specialty: "Pediatrics", image: "https://img.freepik.com/free-photo/doctor-presenting-something-isolated-white-background_1368-5834.jpg?t=st=1725011294~exp=1725014894~hmac=fe58505997ac5a5768ef1335f74352d5e376187eac1b01eed898aca2903aff76&w=740" },
  { name: "John Doe", specialty: "Neurology", image: "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?t=st=1725011031~exp=1725014631~hmac=6d3f4a7f242a032c9b1c7ecfb629da83c7cd1bbadf2079abb93098e60da4c7f9&w=826" },
  { name: "Jane Roe", specialty: "Pediatrics", image: "https://img.freepik.com/free-photo/doctor-presenting-something-isolated-white-background_1368-5834.jpg?t=st=1725011294~exp=1725014894~hmac=fe58505997ac5a5768ef1335f74352d5e376187eac1b01eed898aca2903aff76&w=740" },
];

const DoctorsList = () => {

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/doctors/add-doctor');
  };

  return (
    <BaseLayout>
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className=" mx-5 flex justify-between">
            <h3 className=" py-2 font-bold text-gray-700 text-lg">Doctors</h3>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md add-doctor" onClick={handleNavigation}>Add New Doctor</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={doctor.image} alt={doctor.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="doctor-names text-center">{doctor.name}</h3>
                <p className="doctor-type text-center">{doctor.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BaseLayout>
  );
};

export default DoctorsList;
