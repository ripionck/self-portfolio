import React from "react";
import "../components/programmings.css";

export const Programming = () => {
  const values = [
    {
      text: "JavaScript",
      percentage: 80,
    },
    {
      text: "JavaScript",
      percentage: 80,
    },
    {
      text: "JavaScript",
      percentage: 80,
    },
    {
      text: "JavaScript",
      percentage: 80,
    },
    {
      text: "JavaScript",
      percentage: 80,
    },
    {
      text: "JavaScript",
      percentage: 80,
    },
  ];
  return (
    <>
      <div>
        <div className="row">
          {values.map((value, index) => {
            return (
              <>
                <div className="col-lg-6 col-md-6 col-sm-12 my-2" key={index}>
                  <span className="language">{value.text}</span>
                  <div className="progress-some">
                    <div
                      className="progress-new"
                      style={{ width: `${value.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
