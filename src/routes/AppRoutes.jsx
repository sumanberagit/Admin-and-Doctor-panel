import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import Appointment from "../pages/Appointment/Appointment";
import DoctorsList from "../pages/Doctor/DoctorList/DoctorList";
import AddDoctor from "../pages/Doctor/AddDoctor/AddDoctor";
import DoctorProfile from "../pages/Doctor/DoctorProfile/DoctorProfile";
import Allpatients from "../pages/Patients/Allpatients/Allpatients";
import AddPatients from "../pages/Patients/Addpatients/AddPatients";
import Profile from "../pages/Patients/Profile/Profile";
import InviteDoctor from "../pages/Doctor/InviteDoctor/InviteDoctor";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/appointment" index element={<Appointment />} />
        <Route path="/doctor" index element={<DoctorsList />} />
        <Route path="/doctors/add-doctor" index element={<AddDoctor />} />
        <Route path="/doctors/profile" index element={<DoctorProfile />} />
        <Route path="/allpatients" index element={<Allpatients />} />
        <Route path="/addpatients" index element={<AddPatients />} />
        <Route path="/patientprofile" index element={<Profile />} />
        <Route path="/doctors/invite-doctor" index element={<InviteDoctor />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
