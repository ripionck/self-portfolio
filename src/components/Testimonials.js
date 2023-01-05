import React from "react";
import "../components/testimonials.css";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Aminul Haque",
      comment:
        "He is a very good guy and do the work very smoothly with his best effort. Keep touch with him to support his work as possible.",
    },
    {
      name: "Aminul Haque",
      comment:
        "He is a very good guy and do the work very smoothly with his best effort. Keep touch with him to support his work as possible.",
    },
    {
      name: "Aminul Haque",
      comment:
        "He is a very good guy and do the work very smoothly with his best effort. Keep touch with him to support his work as possible.",
    },
  ];
  return (
    <>
      <div>
        <div className="row mx-5">
          {testimonials.map((value, index) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-12 my-4" key={index}>
                <div className="card shadow testimonial-card d-flex flex-column">
                  <span className="description">{value.comment}</span>
                  <span className="starts">⭐⭐⭐⭐⭐</span>
                  <span className="name">{value.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
