import "./Sidebar.css";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Home from "../../assets/icons/home-outline.svg";
import Contacts from "../../assets/icons/contacts.svg";
import Properties from "../../assets/icons/properties.svg";
import Buyers from "../../assets/icons/buyers.svg";
import Sidearrow from "../../assets/svgs/rightarrow.svg";
import doctorlogo from "../../assets/images/doctorlogo.png";
import LeftArrow from "../../assets/svgs/left-arrow.svg";
import RightArrow from "../../assets/svgs/right-arrow.svg";
import { useSelector } from "react-redux";
import { setDate } from "../../redux/Reducer/AuthReducer";

const sidebarOptions = [
  { name: "Dashboard", icon: Home, link: "/dashboard" },
  { name: "Appointment", icon: Properties, link: "/appointment" },
  { name: "All Staffs", icon: Properties, link: "/allstaffs" },
  { name: "Select Check Up Time", icon: Properties, link: "/calendar" },
];

const SidebarComponent2 = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);
  const location = useLocation();
  const token = useSelector((state) => state.token);
  const userType = useSelector((state) => state.setUserType);
  // console.log("..........", userType);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const toggleSubmenu = (index) => {
    setExpandedMenu(expandedMenu === index ? null : index);
  };

  useEffect(() => {
    // Ensure the submenu stays open if the current path matches a submenu item
    sidebarOptions.forEach((option, index) => {
      if (option.hasSubmenu) {
        const isSubmenuActive = option.submenu.some(
          (subOption) => location.pathname === subOption.link
        );
        if (isSubmenuActive) {
          setExpandedMenu(index);
        }
      }
    });
  }, [location.pathname]);

  const filteredSidebarOptions = sidebarOptions.filter((option) =>
    ["Dashboard", "Appointment", "All Staffs", "Select Check Up Time"].includes(
      option.name
    )
  ); // Show limited options for userType 2
  return (
    <div className={`sidebar ${isSidebarCollapsed ? "collapsed" : ""}`}>
      <div
        className={`${
          isSidebarCollapsed ? "top-section-collapsed" : "top-section"
        }`}
      >
        <div className="logo-section">
          <Link to="/">
            <img src={doctorlogo} alt="Logo" className="sidebar-logo" />
          </Link>
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
          {filteredSidebarOptions.map((option, index) => (
            <li
              key={index}
              className={`option ${isSidebarCollapsed ? "collapsed" : ""} ${
                option.specialClass ? "special-class" : ""
              } w-full cursor-pointer`}
            >
              <div className="flex items-center justify-between">
                <Link to={option.link}>
                  <div
                    className={`h-9 option-link flex items-center w-full body-N ${
                      isSidebarCollapsed ? "collapsed" : ""
                    } py-6`}
                    onClick={() =>
                      option.hasSubmenu ? toggleSubmenu(index) : null
                    }
                  >
                    <div className="flex items-center">
                      <img
                        src={option.icon}
                        alt="icon"
                        className="option-icon w-8 h-7"
                      />
                      {!isSidebarCollapsed && (
                        <p className="ml-4 body-N text-left sidebar-text">
                          {option.name}
                        </p>
                      )}
                    </div>
                    {/* Arrow icon aligned to the right - always visible */}
                    {option.hasSubmenu && (
                      <img
                        src={Sidearrow}
                        alt="arrow"
                        className={`arrow-icon ml-auto ${
                          expandedMenu === index ? "rotate-90" : ""
                        }`}
                      />
                    )}
                  </div>
                </Link>
              </div>

              {/* Render submenu only if the parent is expanded */}
              {!isSidebarCollapsed &&
                expandedMenu === index &&
                option.hasSubmenu && (
                  <ul className="submenu pl-12">
                    {option.submenu.map((subOption, subIndex) => (
                      <li key={subIndex} className="submenu-option mt-2">
                        <Link
                          to={subOption.link}
                          className="option-link body-N text-left"
                        >
                          {subOption.name}
                        </Link>
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

export default SidebarComponent2;
