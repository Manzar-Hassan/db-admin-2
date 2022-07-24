import React from "react";
import { Chart, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Link } from "react-router-dom";

Chart.register(ArcElement, Tooltip);

const DoughnutChart = () => {
  const data = {
    labels: ["Direct", "Social", "Referral"],
    datasets: [
      {
        label: "# of Votes",
        data: [55, 30, 15],
        backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc"],
        borderColor: ["#4e73df", "#1cc88a", "#36b9cc"],
        offset: 8,
        cutout: "82%",
      },
    ],
  };
  const options = {
    layout: {
      padding: 32,
    },
    scales: {
      y: {
        beginAtZero: true,
        display: false,
      },
    },
    plugins: {
      tooltip: {
        intersect: false,
        backgroundColor: "#fff",
        bodyColor: "#858796",
        bodyFont: {
          family: "'Nunito', sans-serif",
        },
        padding: 12,
        cornerRadius: 3,
        displayColors: false,
        borderWidth: 0.5,
        borderColor: "#858796",
      },
    },
  };

  return (
    <div className="col-xl-4 col-lg-5">
      <div className="card shadow mb-4">
        {/* <!-- Card Header - Dropdown --> */}
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
          <div className="dropdown no-arrow">
            <a
              className="dropdown-toggle"
              href="/"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
              aria-labelledby="dropdownMenuLink"
            >
              <div className="dropdown-header">Dropdown Header:</div>
              <Link className="dropdown-item" to="/">
                Action
              </Link>
              <Link className="dropdown-item" to="/">
                Another action
              </Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="/">
                Something else here
              </Link>
            </div>
          </div>
        </div>
        {/* <!-- Card Body --> */}
        <div className="card-body">
          <Doughnut data={data} options={options} />
          <div className="mt-4 text-center small">
            <span className="mr-2">
              <i className="fas fa-circle text-primary"></i> Direct
            </span>
            <span className="mr-2">
              <i className="fas fa-circle text-success"></i> Social
            </span>
            <span className="mr-2">
              <i className="fas fa-circle text-info"></i> Referral
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;
