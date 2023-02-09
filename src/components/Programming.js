import React from "react";
import "../components/programmings.css";

export const Programming = () => {
  const values = [
    {
      text: "HTML",
      percentage: 80,
    },
    {
      text: "CSS",
      percentage: 60,
    },
    {
      text: "JavaScript",
      percentage: 70,
    },
    {
      text: "React",
      percentage: 65,
    },
    {
      text: "Nodejs",
      percentage: 50,
    },
    {
      text: "MongoDB",
      percentage: 70,
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
