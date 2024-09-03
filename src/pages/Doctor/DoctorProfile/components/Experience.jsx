import React from 'react';

const Experience = () => {
  const experiences = [
    { year: '2010 - 2014', title: 'Master Of Science', location: 'X.Y.Z Hospital (NZ)' },
    { year: '2014 - 2016', title: 'Gynecology Test', location: 'X.Y.Z Hospital (NZ)' },
    { year: '2016 - 2019', title: 'Master Of Medicine', location: 'X.Y.Z Hospital (NZ)' },
    { year: '2019 - 2020', title: 'Orthopedics', location: 'X.Y.Z Hospital (NZ)' },
  ];

  return (
    <div className="bg-white">
      <h2 className="head-5 mb-4"> Experience:</h2>
      <p className="doctor-type mb-4">
        The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.
        Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script.
      </p>
      <div className="relative flex items-start">
        {/* Timeline Line */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full border-l border-blue-500"></div>

        {experiences.map((exp, index) => (
          <div key={index} className="relative flex flex-col items-center w-1/4">
            {/* Timeline Node */}
            <div className="z-10 w-4 h-4 bg-blue-500 rounded-full"></div>

            {/* Timeline Connector */}
            {index !== experiences.length - 1 && (
              <div className="absolute top-4 w-0.5 h-14 bg-blue-500"></div>
            )}

            {/* Experience Card */}
            <div className="mt-8 p-4 bg-white border border-gray-200 rounded-lg shadow-md text-center relative z-20">
              <span className="doctor-type">{exp.year}</span>
              <h3 className="head-6">{exp.title}</h3>
              <p className="doctor-type">{exp.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
