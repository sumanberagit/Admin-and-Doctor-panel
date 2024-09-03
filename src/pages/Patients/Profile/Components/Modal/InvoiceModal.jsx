import React from 'react';

const InvoiceModal = ({ show, onClose }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl relative">
                <div className=' flex justify-between mb-5 items-center'>

                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-gray-700"
                    >
                        &#10005;
                    </button>

                    <h1 className="text-xl font-bold text-gray-700">Patient Invoice</h1>
                </div>

                <hr className=' mb-5' />

                <div className="flex justify-between items-start mb-8">

                    <div>

                        <img
                            src="/doctris-logo.png"
                            alt="Doctris"
                            className="mt-2"
                            style={{ width: "100px" }}
                        />
                        <p className="mt-4 text-gray-500">Address :</p>
                        <p className="text-gray-700">1419 Riverwood Drive, Redding, CA 96001</p>
                    </div>


                    <hr />

                    <div className="text-sm text-gray-500">
                        <p>Invoice no. : <span className="font-medium">#54638990jnn</span></p>
                        <p>Email : <a href="mailto:info@doctris.com" className="text-blue-500">info@doctris.com</a></p>
                        <p>Phone : (+12) 1546-456-856</p>
                        <p>Website : <a href="https://www.doctris.com" className="text-blue-500">www.doctris.com</a></p>
                        <p>Patient Name : <span className="font-medium">Mary Skeens</span></p>
                    </div>
                </div>
                <hr className=' mb-3' />
                {/* Invoice Info */}
                <div className="mb-6">
                    <div className="flex justify-between items-center">
                        <p className="font-medium text-gray-700">
                            Invoice <span className="text-sm bg-green-100 text-green-600 px-2 py-1 rounded-full ml-2">Paid</span>
                        </p>
                        <div className="text-sm text-gray-500">
                            <p>Issue Dt. : <span className="font-medium">25th Sep. 2020</span></p>
                            <p>Due Dt. : <span className="font-medium">11th Oct. 2020</span></p>
                            <p>Dr. Name : <span className="font-medium">Dr. Calvin Carlo</span></p>
                        </div>
                    </div>
                    <p className="mt-2 text-gray-700">Surgery (Gynecology)</p>
                </div>

                {/* Invoice Table */}
                <div className="border border-gray-200 rounded-md">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-600">No.</th>
                                <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-600">Item</th>
                                <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-600">Qty</th>
                                <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-600">Rate</th>
                                <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-600">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-3 px-4 border-b border-gray-200 text-gray-700">1</td>
                                <td className="py-3 px-4 border-b border-gray-200 text-gray-700">Hospital Charges</td>
                                <td className="py-3 px-4 border-b border-gray-200 text-gray-700">1</td>
                                <td className="py-3 px-4 border-b border-gray-200 text-gray-700">$125</td>
                                <td className="py-3 px-4 border-b border-gray-200 text-gray-700">$125</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 border-b border-gray-200 text-gray-700">2</td>
                                <td className="py-3 px-4 border-b border-gray-200 text-gray-700">Medicine</td>
                                <td className="py-3 px-4 border-b border-gray-200 text-gray-700">1</td>
                                <td className="py-3 px-4 border-b border-gray-200 text-gray-700">$245</td>
                                <td className="py-3 px-4 border-b border-gray-200 text-gray-700">$245</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 border-b border-gray-200 text-gray-700">3</td>
                                <td className="py-3 px-4 border-b border-gray-200 text-gray-700">Special Visit Fee (Doctor)</td>
                                <td className="py-3 px-4 border-b border-gray-200 text-gray-700">1</td>
                                <td className="py-3 px-4 border-b border-gray-200 text-gray-700">$150</td>
                                <td className="py-3 px-4 border-b border-gray-200 text-gray-700">$150</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-end mt-6 text-gray-700">
                    <div className="text-right">
                        <p>Subtotal : <span className="font-medium">$520</span></p>
                        <p>Taxes : <span className="font-medium">$0</span></p>
                        <p className="text-lg font-semibold">Total : <span className="font-bold">$520</span></p>
                    </div>
                </div>


                <hr className=' mb-5' />

                <div className=' flex justify-between'>
                    <p>Customer Services : (+12) 1546-456-856
                    </p>

                    <strong className='text-blue-600'> Terms & Conditions</strong>
                </div>
            </div>
        </div>
    );
};

export default InvoiceModal;
