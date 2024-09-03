import React from 'react'
import BaseLayout from '../../../layouts/BaseLayout'
import PatientsTable from './Components/PatientsTable'

const Allpatients = () => {
    return (
        <BaseLayout>
            <div className="">
                <div className=" mx-5 flex justify-between">
                    <h3 className=" py-2 font-bold text-gray-700 text-lg">Patients List</h3>
                </div>
                <div className="">
                    <PatientsTable />
                </div>
            </div></BaseLayout>
    )
}

export default Allpatients