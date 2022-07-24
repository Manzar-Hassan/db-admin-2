import React from "react";
import BarChart from "../../components/charts/BarChart";
import DoughnutChart from "../../components/charts/DoughnutChart";
import LineChart from "../../components/charts/LineChart";

function ChartPage() {
  return (
    <div className="container-fluid">
      {/* <!-- Page Heading --> */}
      <h1 className="h3 mb-2 text-gray-800">Charts</h1>
      <p className="mb-4">
        Chart.js is a third party plugin that is used to generate the charts in
        this theme. The charts below have been customized - for further
        customization options, please visit the
        <a
          target="_blank"
          href="https://www.chartjs.org/docs/latest/"
          rel="noreferrer"
        >
          official Chart.js documentation
        </a>
        .
      </p>

      {/* <!-- Content Row --> */}
      <div className="row">
        <div className="col-xl-8 col-lg-7">
          {/* <!-- Area Chart --> */}
          <LineChart />

          {/* <!-- Bar Chart --> */}
          <BarChart />
        </div>
        <DoughnutChart />
      </div>
    </div>
  );
}

export default ChartPage;
