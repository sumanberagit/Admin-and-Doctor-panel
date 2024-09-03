// TeamMember?Card.js
import React from 'react';
import { ReactComponent as Star } from '../../../../assets/svgs/star.svg';
import { ReactComponent as Location } from '../../../../assets/svgs/location.svg';
import { ReactComponent as Time } from '../../../../assets/svgs/time.svg';
import { ReactComponent as Dollar } from '../../../../assets/svgs/dollar.svg';
import Twitter from '../../../../assets/icons/twitter.png';

const TeamMemberCard = ({ member }) => {
    return (
        <div className="bg-white shadow-lg flex flex-col items-center  ">
            <div className="relative w-full h-full object-cover">
                <img
                    src={member?.imgSrc}
                    alt={member?.name}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="mt-4 text-center p-4">
                <p className="text-left head-5">{member?.name}</p>
                <p className=" text-left doctor-type">{member?.title}</p>
                <div className="flex text-left text-yellow-400 mt-1">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-5" />
                    ))}
                </div>
            </div>

            <div className="mt-4 text-left text-gray-500">
                <p className="flex doctor-type">
                    <Location className="w-5 h-5 text-blue-600 mr-2 mt-1" />
                    {member?.location}
                </p>

                <p className="flex doctor-type">
                    <Time className="w-5 h-5 text-blue-600 mr-2 mt-1" />
                    {member?.time}
                </p>
                <p className="flex doctor-type">
                    <Dollar className="w-5 h-5 text-blue-600 mr-2 mt-1" />
                    {member?.price}
                </p>
            </div>

            <div className="mt-4 flex justify-center space-x-4 py-7">
                <button className="bg-blue-100 p-2 rounded-full">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                        alt="Facebook"
                        className="w-6 h-6"
                    />
                </button>
                <button className="bg-blue-100 p-2 rounded-full">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                        alt="LinkedIn"
                        className="w-6 h-6"
                    />
                </button>
                <button className="bg-blue-100 p-2 rounded-full">
                    <img
                        src={Twitter}
                        alt="Twitter"
                        className="w-6 h-6"
                    />
                </button>
            </div>
        </div>
    );
};

export default TeamMemberCard;
