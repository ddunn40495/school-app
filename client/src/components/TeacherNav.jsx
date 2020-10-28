import React, { useEffect, useState, Fragment } from "react";

import { toast } from "react-toastify";

const TeacherNav = (props) => {
  return (
    <Fragment>
      <nav className='nav-extended'>
        <div className='nav-wrapper'>
          <a href='#' className='brand-logo'>
            Logo
          </a>
          <a href='#' data-target='mobile-demo' className='sidenav-trigger'>
            <i className='material-icons'>menu</i>
          </a>
          <ul id='nav-mobile' className='right'>
            <li>
              <a href='sass.html'>{props.firstname}</a>
            </li>
            <li>
              <a href='badges.html'>Components</a>
            </li>
            <li>
              <a href='collapsible.html'>JavaScript</a>
            </li>
          </ul>
        </div>
        <div className='nav-content'>
          <ul className='tabs tabs-transparent'>
            <li className='tab'>
              <a href='#test1'>Test 1</a>
            </li>
            <li className='tab'>
              <a className='active' href='#test2'>
                Test 2
              </a>
            </li>
            <li className='tab disabled'>
              <a href='#test3'>Disabled Tab</a>
            </li>
            <li className='tab'>
              <a href='#test4'>Test 4</a>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default TeacherNav;
