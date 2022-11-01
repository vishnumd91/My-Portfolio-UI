import React, { ReactElement } from "react";
import { educationData } from "../../constants";

export const Education = (): ReactElement => {
  const educationDetails = educationData || [];

  return (
    <div className="container-fluid">
      <section className="resume-section" id="education">
        <div className="resume-section-content">
          <h2 className="mb-5">Education</h2>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              {educationDetails?.map((education, index) => {
                return (
                  <div key={index}>
                    <h3 className="mb-0">{education.heading}</h3>
                    <div className="subheading mb-3">
                      {education?.subHeading}
                    </div>
                    <div>{education?.course}</div>
                    <p>{`GPA: ${education?.grade}`}</p>
                  </div>
                );
              })}
            </div>
            <div className="flex-shrink-0">
              {educationDetails.map((education, index) => {
                return (
                  <span key={index} className="text-primary">
                    {education.duration}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
