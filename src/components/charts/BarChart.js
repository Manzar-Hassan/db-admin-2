import React from "react";
import {
  Chart,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(LineElement, CategoryScale, LinearScale, BarElement, Tooltip);

const BarChart = () => {
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
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Bar Chart</h6>
      </div>
      <div className="card-body">
        <Bar data={data} options={options} />
        <hr />
        Styling for the bar chart can be found in the
        <code>/js/demo/chart-bar-demo.js</code> file.
      </div>
    </div>
  );
};

export default BarChart;
