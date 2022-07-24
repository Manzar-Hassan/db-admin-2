import React from "react";
import BasicCard from "../../components/cards/BasicCard";
import CollapseableCard from "../../components/cards/CollapseableCard";
import DefaultCard from "../../components/cards/DefaultCard";
import DropdownCard from "../../components/cards/DropdownCard";
import EarningMonthly from "../../components/cards/EarningMonthly";
import EarningYealy from "../../components/cards/EarningYealy";
import PendingRequests from "../../components/cards/PendingRequests";
import Tasks from "../../components/cards/Tasks";

function CardsPage() {
  return (
    <div className="container-fluid">
      {/* <!-- Page Heading --> */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Cards</h1>
      </div>

      <div className="row">
        <EarningMonthly />
        <EarningYealy />
        <Tasks />
        <PendingRequests />
      </div>

      <div className="row">
        <div className="col-lg-6">
          <DefaultCard />
          <BasicCard />
        </div>

        <div className="col-lg-6">
          <DropdownCard />
          <CollapseableCard />
        </div>
      </div>
    </div>
  );
}

export default CardsPage;
