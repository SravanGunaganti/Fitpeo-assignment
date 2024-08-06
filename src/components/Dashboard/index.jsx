import React from "react";
import Metrics from "../Metrics";
import Activity from "../Activity";
import RecentOrders from "../RecentOrders";
import CustomerFeedback from "../CustomerFeedback";
import AdditionalInfo from "../AdditionalInfo";
import "./index.css";

function Dashboard() {
  return (
    <div className="w-full space-y-6">
      <Metrics />
      <div className="m-0 p-0 grid grid-cols-1 md:grid-cols-6 gap-6">
        <div className="col-span-6 md:col-span-4 md:col-start-1">
          <Activity />
        </div>
        <div className=" col-span-6 md:col-span-2 md:col-start-5">
          <AdditionalInfo />
        </div>
      </div>
      <div className="m-0 p-0 grid grid-cols-1 md:grid-cols-6 gap-6">
        <div className="overflow-x-scroll hide-scrollbar overflow-y-hidden md:overflow-visible col-span-6 md:col-span-4 md:col-start-1">
          <RecentOrders />
        </div>
        <div className="col-span-6 md:col-span-2 md:col-start-5">
          <CustomerFeedback />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
