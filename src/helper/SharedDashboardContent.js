import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import LogoutModal from "../components/logout/LogoutModal";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";

const SharedDashboardContent = () => {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Navbar />
          <Outlet />
        </div>
        <Footer />
      </div>
      <LogoutModal />
    </div>
  );
};

export default SharedDashboardContent;
