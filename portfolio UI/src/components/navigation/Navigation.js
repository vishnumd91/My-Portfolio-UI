import React from 'react';
import { Link } from 'react-router-dom';

import { navigationData } from '/src/constants';

function Navigation() {

  const navigationHeading = navigationData || {};

  return (
    <div id='page-top'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">Clarence Taylor</span>
                <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="public\assets\profile.jpg" alt="" /></span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  {navigationHeading.map(headings =>
                    <li key = {headings.id} className="nav-item nav-link">
                      <Link target='_blank' to = '/about' className = 'nav-link'>{headings.heading}</Link>
                    </li>
                    )}
                </ul>
            </div>
        </nav>

    </div>
  )
}

export default Navigation
