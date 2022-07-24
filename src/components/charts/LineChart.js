import React from "react";
import {
  Chart,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";

Chart.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler
);

const LineChart = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Earnings",
        data: [
          0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000,
          25000, 40000,
        ],
        backgroundColor: "#4e73df",
        borderColor: "#4e73df",
        borderWidth: 3,
        tension: 0.3,
        fill: {
          target: "origin",
          above: "rgba(78, 115, 223, 0.05)",
        },
      },
    ],
  };

  const options = {
    layout: {
      padding: 20,
    },
    plugins: {
      tooltip: {
        intersect: false,
        titleColor: "#5a5c69",
        backgroundColor: "#fff",
        bodyColor: "#858796",
        bodyFont: {
          family: "'Nunito', sans-serif",
        },
        titleFont: {
          family: "'Nunito', sans-serif",
          size: 14,
        },
        padding: 12,
        cornerRadius: 3,
        displayColors: false,
        borderWidth: 0.5,
        borderColor: "#858796",
        callbacks: {
          label: (value) => {
            return `${value.dataset.label}: $${value.raw}`;
          },
        },
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (value) => {
            return "$" + value;
          },
          font: {
            family: "'Nunito', sans-serif",
          },
          maxTicksLimit: 6,
        },
        beginAtZero: true,
        grid: {
          borderDash: [2, 2],
          drawBorder: false,
        },
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          font: {
            family: "'Nunito', sans-serif",
          },
          maxTicksLimit: 6,
        },
      },
    },
  };

  return (
    <div className="card shadow mb-4">
      {/* <!-- Card Header - Dropdown --> */}
      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
        <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
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
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
