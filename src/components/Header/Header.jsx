import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import proImage from "../../assets/images/Ellipse 5.png";
import Profile from "../../assets/svgs/profile.svg";
import Setting from "../../assets/svgs/Setting.svg";
import Logout from "../../assets/svgs/Logout.svg";
import NotificationIcon from "../../assets/images/notification.png";
import emailIcon from "../../assets/images/email.png";

const options = [
  { name: "My Profile", icon: Profile, link: "/profile" },
  { name: "Setting", icon: Setting, link: "/setting" },
  { name: "Logout", icon: Logout, link: "/" },
];

const Header = () => {
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogOut = () => {
    navigate("/");
    localStorage.clear();
  };

  useEffect(() => {
    // Close dropdown if clicked outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="header light-bg-L">
      <div className="left-section">
        <div className="relative w-full max-w-xs">
          <input
            type="text"
            placeholder="Search Keywords..."
            className="w-full px-4 py-2 text-gray-600 bg-white border rounded-full shadow-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <span className="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M18.5 10.5A8.5 8.5 0 1110 2a8.5 8.5 0 018.5 8.5z"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="right-section flex items-center space-x-6 mr-16">
        {/* Notification icon */}
        <img src={NotificationIcon} alt="Notifications" className="h-6 w-6" />

        {/* Email icon */}
        <img src={emailIcon} alt="Emails" className="h-6 w-6" />

        {/* User profile image with onClick to toggle dropdown */}
        <div ref={dropdownRef} className="relative">
          <img
            src={proImage}
            alt="User"
            className="user-image cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />

          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-black rounded-md shadow-lg z-50">
              <ul className="py-2">
                <li className="profile-image" onClick={() => navigate("/")}>
                  <p className="mt-2 head-4 light-L capitalize">
                    {/* {userDetails?.first_name} {userDetails?.last_name} */}
                  </p>
                </li>

                {options.map((option, idx) => (
                  <li
                    key={idx}
                    onClick={() => {
                      if (option.name === "Logout") {
                        handleLogOut();
                      } else {
                        navigate(option.link);
                      }
                    }}
                    className=" px-4 py-2 flex items-center cursor-pointer"
                  >
                    <img src={option.icon} alt="icon" className="w-4 h-4" />
                    <p className="ml-2 body-L light-L">{option.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
