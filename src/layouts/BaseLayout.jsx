import React from "react";
import "./layout.css";
import SidebarforDoctor from "../components/Sidebar/Sidebar";
import Sidebar from "../components/Sidebar/Sidebar2";
import Header from "../components/Header/Header";
import { useSelector } from "react-redux";

const BaseLayout = ({ children }) => {
  const userType = useSelector((state) => state.setUserType);
  console.log("userType>>>>>>>>>>", userType);

  // Conditionally render the sidebar based on userType
  const renderSidebar = () => {
    if (userType === 1) {
      return <Sidebar />;
    } else if (userType === 2) {
      return <SidebarforDoctor />;
    }
    return null; // You can return a default sidebar or nothing
  };

  return (
    <div className="baselayout-container light-bg-H ">
      <div className="sidebar-main light-bg-L">{renderSidebar()}</div>
      <div className="header-dasboard main_container" style={{ width: "100%" }}>
        <Header />
        <div className="dashboard bg-doctor">
          <div className="container-fluid main_container">
            <div className="row ">
              <div className="col-lg-12 col-sm-12">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseLayout;
