import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../components/contact.css";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name + ", " + email,
      to_name: "ripionchakma.421@gmail.com",
      feedback: message,
    };
    emailjs
      .send(
        "service_p8nxmwc",
        "template_ywq2dlm",
        templateParams,
        "fmBsYnrMxwWoCsVad"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div>
        <div className="contact-me-card row mx-auto">
          <div className="col-lg-6 col-md-5 col-sm-12 left-contact px-2 py-2">
            <span className="get-in-touch mx-4 my-5">Get in touch</span>
            <div className="py-5 d-flex justify-content-center">
              <lottie-player
                src="https://assets10.lottiefiles.com/packages/lf20_u25cckyh.json"
                background="transparent"
                speed="1"
                style={{ width: "300px", height: "300px" }}
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
          <div className="col-lg-6 col-md-5 col-sm-12 my-auto">
            <form
              className="d-flex flex-column card-contact-right"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="input-group my-3 d-flex flex-column">
                <label>Name:</label>
                <input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  placeholder="Enter your name"
                  className="input-groups"
                />
              </div>
              <div className="input-group my-3 d-flex flex-column">
                <label>Email:</label>
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="text"
                  placeholder="Enter your email"
                  className="input-groups"
                />
              </div>
              <div className="input-group my-3 d-flex flex-column">
                <label>Message:</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  type="text"
                  placeholder="Type your message"
                  className="input-groups"
                />
              </div>
              <div className="input-group my-3 d-flex flex-column">
                <input
                  type="submit"
                  className="btn btn-success"
                  value="Send Message"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
