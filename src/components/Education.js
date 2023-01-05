import React from "react";
import "../components/education.css";

export const Education = () => {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">Dhaka University</span>
            <span className="university-degree">BA(Hons)</span>
          </div>
          <div>
            <span className="year-passedOut">2017-2021</span>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">Khagrachhari Govt. College</span>
            <span className="university-degree">BA(Hons)</span>
          </div>
          <div>
            <span className="year-passedOut">2017-2021</span>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">
              Khagrachhari Govt. High School
            </span>
            <span className="university-degree">BA(Hons)</span>
          </div>
          <div>
            <span className="year-passedOut">2017-2021</span>
          </div>
        </div>
      </div>
    </>
  );
};
