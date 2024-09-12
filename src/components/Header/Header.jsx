import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import proImage from "../../assets/images/Ellipse 5.png";
import Profile from "../../assets/svgs/profile.svg";
import Setting from "../../assets/svgs/Setting.svg";
import Logout from "../../assets/svgs/Logout.svg";
import Arrow from "../../assets/svgs/angle down.svg";

const options = [
  { name: "My Profile", icon: Profile, link: "/profile" },
  { name: "Setting", icon: Setting, link: "/setting" },
  { name: "Logout", icon: Logout, link: "/" },
];

const Header = () => {
  const navigate = useNavigate();
  const sidebarRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogOut = () => {
    navigate("/");

    localStorage.clear();
  };

  useEffect(() => {
    const handleClose = () => {
      setIsOpen(false);
    };
  }, []);

  return (
    <div className="header light-bg-L">
      <div className="left-section">
        <div className="search-box">
          <input type="text" className="body-N" placeholder="Search" />
          <span className="icon-search"></span>
        </div>
      </div>

      <div className="right-section mr-5">
        <>
          <img src={proImage} alt="user" className="user-image" />

          <div ref={sidebarRef} className="custom-dropdown">
            <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
              {/* <p className="head-5 dark-H capitalize">
                {userDetails?.first_name} {userDetails?.last_name}
              </p> */}
              <img
                src={Arrow}
                alt="Dropdown Arrow"
                className="dropdown-arrow"
              />
            </div>

            {isOpen && (
              <div className="dropdown-list-container dropdown-end bg-gray-400 light-L">
                <ul className="dropdown-list">
                  <li className="profile-image" onClick={() => navigate("/")}>
                    {/* <img src={proImage} alt="icon" /> */}
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
                      className="hover:bg-none"
                    >
                      <img src={option.icon} alt="icon" />{" "}
                      <p className="ml-2 body-L light-L">{option.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </>
      </div>
    </div>
  );
};

export default Header;
