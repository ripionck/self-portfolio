import React from "react";
import "../components/works.css";

export const Works = () => {
  return (
    <>
      <div className="works-inside-new mx-2 my-4">
        <div className="d-flex flex-column">
          <div className="d-flex flex-row justify-content-between">
            <span className="company-name">company name</span>
            <span className="year-passedOut">Time period</span>
          </div>
        </div>
        <div className="d-flex flex-column">
          <span className="position">Full Stack Developer</span>
          <span className="description-position">
            <ul>
              <li>Created a Job Portal for the website which </li>
              <li>Created a Job Portal for the website which </li>
              <li>Created a Job Portal for the website which </li>
            </ul>
          </span>
        </div>
      </div>
    </>
  );
};
