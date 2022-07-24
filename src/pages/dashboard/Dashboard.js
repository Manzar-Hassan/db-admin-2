import React from "react";
import { Link } from "react-router-dom";
import Approach from "../../components/cards/Approach";
import ColorSystem from "../../components/cards/ColorSystem";
import EarningMonthly from "../../components/cards/EarningMonthly";
import EarningYealy from "../../components/cards/EarningYealy";
import Illustration from "../../components/cards/Illustration";
import PendingRequests from "../../components/cards/PendingRequests";
import Projects from "../../components/cards/Projects";
import Tasks from "../../components/cards/Tasks";
import DoughnutChart from "../../components/charts/DoughnutChart";
import LineChart from "../../components/charts/LineChart";

const Dashboard = () => {
  return (
    <div className="container-fluid">
      {/* <!-- Page Heading --> */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <Link
          to="/"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i>
          Generate Report
        </Link>
      </div>

      {/* <!-- Content Row --> */}
      <div className="row">
        <EarningMonthly />
        <EarningYealy />
        <Tasks />
        <PendingRequests />
      </div>

      {/* <!-- Content Row --> */}
      <div className="row">
        <div className="col-xl-8 col-lg-7">
          <LineChart />
        </div>
        <DoughnutChart />
      </div>

      <div className="row">
        <div className="col-lg-6 mb-4">
          <Projects />
          <ColorSystem />
        </div>

        <div className="col-lg-6 mb-4">
          <Illustration />
          <Approach />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
