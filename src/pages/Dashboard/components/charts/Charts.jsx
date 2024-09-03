import React from "react";
import RoundedChart from "./RoundedChart";
import BarChart from "./BarChart";


const Charts = () => {
  return (
    <div className="flex row space-x-4 mx-5 justify-center ">
      <div className="rounded-md col-lg-7 col-sm-12 w-[700px] bg-white border border-gray-300 ">
        <BarChart />
      </div>
      <div className="  rounded-md col-lg-8 col-sm-12 w-[450px]  bg-white border border-gray-300 ">
        <RoundedChart />
      </div>
    </div>
  );
};

export default Charts;
