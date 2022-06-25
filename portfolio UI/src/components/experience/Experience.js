import React, { useEffect, useState } from "react";
import { experienceData } from "/src/constants";
import axiosInstance from "../../api/axiosConfig";

function Experience() {
  const experience = experienceData || {};
  // Server Data will be used in DOM once proper API implementation is done.
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axiosInstance.get("/portfolio/experience");
    setData(response.data);
  };
  // eslint-disable-next-line no-undef
  console.log("test exp data", data);

  return (
    <div className="container-fluid p-0">
      <section className="resume-section" id="experience">
        <div className="resume-section-content">
          <h2 className="mb-5">Experience</h2>
          {experience.map((experienceInputs, index) => {
            return (
              <div
                key={index}
                className="d-flex flex-column flex-md-row justify-content-between mb-5"
              >
                <div className="flex-grow-1">
                  <h3 className="mb-0">{experienceInputs.heading}</h3>
                  <div className="subheading mb-3">
                    {experienceInputs.subHeading}
                  </div>
                  <p>{experienceInputs.content}</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary">
                    {experienceInputs.workExperience}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Experience;
