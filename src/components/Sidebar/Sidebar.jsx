import "./Sidebar.css";
import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Home from "../../assets/icons/home-outline.svg";
import Contacts from "../../assets/icons/contacts.svg";
import Companies from "../../assets/icons/companies.svg";
import Properties from "../../assets/icons/properties.svg";
import Buyers from "../../assets/icons/buyers.svg";
import Sidearrow from "../../assets/svgs/rightarrow.svg";
import doctorlogo from "../../assets/images/doctorlogo.png";
import LeftArrow from "../../assets/svgs/left-arrow.svg";
import RightArrow from "../../assets/svgs/right-arrow.svg";

const sidebarOptions = [
  { name: "Dashboard", icon: Home, link: "/dashboard" },
  { name: "Appointment", icon: Properties, link: "/appointment" },
  {
    name: "Doctors",
    icon: Contacts,
    link: "#", // No link for parent option since it's a toggle
    hasSubmenu: true,
    submenu: [
      { name: "Doctor List", link: "/doctor" },
      { name: "Invite Doctor", link: "/doctors/invite-doctor" },
      { name: "Doctor Profile", link: "/doctors/profile" },
    ],
  },
  {
    name: "Patients",
    icon: Buyers,
    link: "#", // No link for parent option since it's a toggle
    hasSubmenu: true,
    submenu: [
      { name: "All Patients", link: "/allpatients" },
      { name: "Add Patients", link: "/addpatients" },
      { name: "Profile", link: "/patientprofile" },
    ],
  },
  // { name: "Patients", icon: Buyers, link: "/patients" },
  { name: "Layouts", icon: Companies, link: "#", specialClass: true },
];

const SidebarComponent = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const toggleSubmenu = (index) => {
    setExpandedMenu(expandedMenu === index ? null : index);
  };

  return (
    <div className={`sidebar ${isSidebarCollapsed ? "collapsed" : ""}`}>
      <div
        className={`${
          isSidebarCollapsed ? "top-section-collapsed" : "top-section"
        }`}
      >
        <div className="logo-section">
          <NavLink to="/">
            <img src={doctorlogo} alt="Logo" className="sidebar-logo" />
          </NavLink>
          <button onClick={toggleSidebar} className="toggle-button">
            <img
              src={isSidebarCollapsed ? RightArrow : LeftArrow}
              alt="Collapse Icon"
              className="arrow-icon"
            />
          </button>
        </div>
      </div>

      <ul className="options">
        <div
          className={`middle_sidebar ${isSidebarCollapsed ? "collapsed" : ""}`}
        >
          {sidebarOptions.map((option, index) => (
            <li
              key={index}
              className={`option ${isSidebarCollapsed ? "collapsed" : ""} ${
                option.specialClass ? "special-class" : ""
              } w-full cursor-pointer`}
            >
              <div className="flex items-center justify-between ">
                <NavLink to={option.link}>
                  <div
                    className={` h-9 option-link flex items-center w-full body-N ${
                      isSidebarCollapsed ? "collapsed" : ""
                    } py-6  `}
                    onClick={() =>
                      option.hasSubmenu ? toggleSubmenu(index) : null
                    }
                  >
                    <div className="flex items-center">
                      <img
                        src={option.icon}
                        alt="icon"
                        className="option-icon w-8 h-7 "
                      />
                      {!isSidebarCollapsed && (
                        <p className="ml-4 body-N text-left sidebar-text">
                          {option.name}
                        </p>
                      )}
                    </div>
                    {/* Arrow icon aligned to the right - always visible */}
                    <img
                      src={Sidearrow}
                      alt="arrow"
                      className={`arrow-icon ml-auto ${
                        option.hasSubmenu && expandedMenu === index
                          ? "rotate-90"
                          : ""
                      }`}
                    />
                  </div>
                </NavLink>
              </div>

              {/* Render submenu only if the parent is expanded */}
              {!isSidebarCollapsed &&
                expandedMenu === index &&
                option.hasSubmenu && (
                  <ul className="submenu pl-12">
                    {option.submenu.map((subOption, subIndex) => (
                      <li key={subIndex} className="submenu-option mt-2 ">
                        <NavLink
                          to={subOption.link}
                          className="option-link body-N text-left "
                          activeClassName="active"
                          isActive={() => location.pathname === subOption.link}
                        >
                          {subOption.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default SidebarComponent;
