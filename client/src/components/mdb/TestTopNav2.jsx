import React, { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";
const TestTopNav2 = () => {
  return (
    <Fragment>
      <nav className='navbar navbar-expand-lg scrolling-navbar navbar-light bg-light double-nav'>
        <div>
          <span className='navbar-brand mb-0 h1'>Navbar</span>
        </div>
        <ul class='nav nav-tabs nav-fill mb-3' id='ex1' role='tablist'>
          <li className='tab nav-item'>
            <Link to='/teacher/classes'>Classes</Link>
          </li>
          <li className='tab nav-item'>
            <Link to='/teacher/assignments'>Assignments</Link>
          </li>
          <li className='tab nav-item'>
            <Link to='/teacher/grades'>Grades</Link>
          </li>
          <li className='tab nav-item'>
            <Link to='/teacher/students'>Students</Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default TestTopNav2;
