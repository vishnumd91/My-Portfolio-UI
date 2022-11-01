import React, { FC } from "react";
import profilePic from "../../../../public/assets/profile.jpg";

import { navigationData } from "../../constants/index";
import { NavigationInputs } from "../../types/types";

export const Navigation: FC = () => {
  const navigationHeading: NavigationInputs[] = navigationData || [];

  return (
    <div id="page-top">
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand" href="#about">
          <span className="d-block d-lg-none">Vishnu M D</span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src={profilePic}
              alt="Profile Picture"
            />
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            {navigationHeading.map((headings: NavigationInputs) => (
              <li key={headings.id} className="nav-item nav-link">
                <a
                  href={`#${headings.heading.toLowerCase()}`}
                  className="nav-link"
                >
                  {headings.heading}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
