import React, { ReactElement } from "react";
import { skillData, workflowContent } from "../../constants";

export const Skills = (): ReactElement => {
  const skillInputs = skillData || [];

  const workflowInputs = workflowContent || [];

  return (
    <div className="container-fluid p-0">
      <hr className="m-0" />
      <section className="resume-section" id="skills">
        <div className="resume-section-content">
          <h2 className="mb-5">Skills</h2>
          <div className="subheading mb-3">Programming Languages & Tools</div>
          <ul className="list-inline dev-icons">
            {skillInputs?.map((data, index) => {
              return (
                <li key={index} className="list-inline-item">
                  <i
                    style={{ marginRight: "1rem" }}
                    className={`${data?.name}`}
                  ></i>
                </li>
              );
            })}
          </ul>
          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            {workflowInputs?.map((data, index) => {
              return (
                <li key={index}>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  {data?.content}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Skills;
