import React from 'react'
import profile from '../../../../assets/images/google.png'
import bg from '../../../../assets/images/trioakBg.png'

const ProfileCard = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg h-[550px] w-[900px]">
            <div className="relative">
                <img
                    className="w-full h-32 rounded-t-lg object-cover"
                    src={bg}
                    alt="Cover"
                />
                <img
                    className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white"
                    src={profile}
                    alt="Profile"
                    width={130}
                    height={130}
                />
            </div>
            <div className="text-center mt-20">
                <h2 className="text-2xl font-semibold">Christopher Burrell</h2>
                <p className="text-gray-500">25 Years old</p>
                <div className="mt-4">
                    <p className="text-sm text-gray-500">Complete your profile</p>
                    <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '89%' }}></div>
                    </div>
                </div>
                <div className="mt-4 space-y-2 text-left">
                    <p><strong>Gender:</strong> Female</p>
                    <p><strong>Birthday:</strong> 19th January 1995</p>
                    <p><strong>Phone No.:</strong> +1 (125) 458-8547</p>
                    <p><strong>Address:</strong> Sydney, Australia</p>
                    <p><strong>Blood Group:</strong> B +</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard