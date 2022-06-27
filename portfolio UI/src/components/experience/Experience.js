import React, { useEffect, useState } from "react";
// import { experienceData } from "/src/constants";
import axiosInstance from "../../api/axiosConfig";

function Experience() {
  // const experience = experienceData || {};
  // Server Data will be used in DOM once proper API implementation is done.
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
    return () => {
      setData([]);
    };
  }, []);

  const fetchData = async () => {
    const response = await axiosInstance.get("/portfolio/experience");
    if (response.status === 200) return setData(response.data);
    return setData(null);
  };

  const getDateinRequiredFormat = (date) => {
    const dateObj = new Date(date);
    const requuiredFormat = dateObj.toLocaleString("default", {
      month: "long",
      year: "numeric",
    });
    return requuiredFormat;
  };

  return (
    <div className="container-fluid p-0">
      <section className="resume-section" id="experience">
        <div className="resume-section-content">
          <h2 className="mb-5">Experience</h2>
          {data.map((experienceInputs) => {
            const {
              position,
              country,
              company,
              state,
              description,
              startDate,
              endDate,
              _id,
              isCurrent,
            } = experienceInputs;
            return (
              <div
                key={_id}
                className="d-flex flex-column flex-md-row justify-content-between mb-5"
              >
                <div className="flex-grow-1">
                  <h3 className="mb-0">{position}</h3>
                  <div className="subheading mb-3">
                    {`${company}, ${state}, ${country}`}
                  </div>
                  <p>{description}</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary">
                    {`${getDateinRequiredFormat(startDate)} - ${
                      isCurrent ? "Present" : getDateinRequiredFormat(endDate)
                    }`}
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
