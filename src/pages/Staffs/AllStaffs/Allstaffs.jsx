import React from "react";
import BaseLayout from "../../../layouts/BaseLayout";
import StaffsTable from "./Components/StaffsTable";

const AllStaffs = () => {
  return (
    <BaseLayout>
      <div className="">
        <div className=" mx-5 flex justify-between">
          <h3 className=" py-2 font-bold text-gray-700 text-lg">Staffs List</h3>
        </div>
        <div className="">
          <StaffsTable />
        </div>
      </div>
    </BaseLayout>
  );
};

export default AllStaffs;
