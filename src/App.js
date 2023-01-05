import { useEffect, useState, useRef } from "react";
import "./App.css";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Programming } from "./components/Programming";
import { Projects } from "./components/Projects";
import { Testimonials } from "./components/Testimonials";
import { Works } from "./components/Works";
import Typed from "typed.js";

function App() {
  const [education, setEducation] = useState(true);
  const [worksHistory, setWorksHistory] = useState(false);
  const [programmings, setProgrammings] = useState(false);
  const [projects, setProjects] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Enthusiastic Dev 😎",
        "Full Stack Developer 💻",
        "MERN Stack Developer 💻",
      ],
      startDelay: 0,
      typeSpeed: 80,
      backSpeed: 30,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      autoInsertCss: true,
      cursorChar: "|",
    });
    return () => {
      typed.destroy();
    };
  }, []);
  function SetAllFalse() {
    setEducation(false);
    setWorksHistory(false);
    setProgrammings(false);
    setProjects(false);
  }

  function ChangeState(function1, state1) {
    SetAllFalse();
    function1(state1);
  }
  return (
    <div className="App">
      <div className="navbar-option-mobile bg-new">
        <div className="d-flex flex-row justify-content-between">
          <span className="brand-name d-flex align-items-center justify-content-center">
            Ripion Chakma
          </span>
          <div
            className="bars mx-4"
            onClick={() => {
              setOpenNav(!openNav);
            }}
          >
            {" "}
          </div>
        </div>
      </div>
      <nav
        className={
          !openNav
            ? "d-flex flex-rows navbar-new transition-all bg-new px-9 py-5"
            : "d-flex flex-rows navbar-fixed-new transition-all bg-new px-9 py-5"
        }
      >
        <span className="brand-name">CREATIVE WORLD</span>
        <div className="d-flex flex-rows">
          <a
            href="#home"
            className="mx-4 nav-items"
            onClick={() => {
              setOpenNav(false);
            }}
          >
            Home
          </a>
          <a
            href="#about-me"
            className="mx-4 nav-items"
            onClick={() => {
              setOpenNav(false);
            }}
          >
            About Me
          </a>
          <a
            href="#resume"
            className="mx-4 nav-items"
            onClick={() => {
              setOpenNav(false);
            }}
          >
            Resume
          </a>
          <a
            href="#testimonial"
            className="mx-4 nav-items"
            onClick={() => {
              setOpenNav(false);
            }}
          >
            Testimonial
          </a>
          <a
            href="#contact-me"
            className="mx-4 nav-items"
            onClick={() => {
              setOpenNav(false);
            }}
          >
            Contact Me
          </a>
        </div>
      </nav>
      {/* hero section */}
      <div className="heroSection px-10 py-2" id="home">
        <div className="heroSection-2 row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex flex-column justify-content-center Im-text-section">
              <span className="Im-text">
                Hello, I'm <span className="name-Im-text">Ripion Chakma</span>
              </span>
              <span
                className="Im-text-enthusiastic py-3"
                style={{ minHeight: "79px" }}
                ref={el}
              >
                {/* Enthusiastic Dev 😎 */}
              </span>
              <span className="Im-text-subheading">
                Knack of building applications with front and back end
                operations
              </span>
              <div className="d-flex flex-row justify-content-center mt-5 mb-5">
                <a href="#contact-me" className="btn-hire-me">
                  Hire me
                </a>
                <a
                  href="https://res.cloudinary.com/ds9r9nybl/raw/upload/v1672927589/ripion_chakma_junior_web_developer_iqtkkm.docx"
                  className="btn-resume-me"
                  download
                >
                  Get Resume
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex justify-content-center custom-div-outer-img">
              <img
                className="img-fluid custom-img"
                src="https://res.cloudinary.com/ds9r9nybl/image/upload/v1672834226/d704d46216eef3e207c8f9ac7029eef9.0_zvveqz.jpg"
                alt="heroImage"
              />
            </div>
          </div>
        </div>
      </div>

      {/* about me section */}
      <div className="about-me-section aboutme-inside my-5" id="about-me">
        <div className="d-flex flex-column">
          <span className="about-me-text">About Me</span>
          <span className="why-text-sub">Why Choose Me?</span>
          <div className="row justify-content-center shadow-lg my-5">
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
              <lottie-player
                className="lottie-1"
                src="https://assets6.lottiefiles.com/packages/lf20_5o8zf8kq.json"
                background="transparent"
                speed="1"
                // style={{ width: "500px", height: "500px" }}
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column">
              <span className="some-text-about-me">
                Full Stack web developer with background knowledge in MERN stack
                with redux, along with a knack of building applications with
                utmost efficient. Strong professional BSC willing to be an asset
                for an organization.
              </span>
              <span className="few-highlights">
                <span className="few-text">Here are few highlights</span>
                <span className="few-list">
                  <ul>
                    <li>Full stack web developer</li>
                    <li>Interactive Front end as per the design</li>
                    <li>React Native</li>
                    <li>
                      Node JS, Express, MongoDB (All backend technologies)
                    </li>
                  </ul>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* resume section */}
      <div className="resume-outer-section d-flex flex-column" id="resume">
        <span className="about-me-text">Resume</span>
        <span className="why-text-sub">My Formal Bio Details</span>
        <div
          className="resume-new-section row"
          style={{ width: "70%", marginInline: "auto", height: "400px" }}
        >
          <div className="col-lg-4 col-md-4 resume-left-section d-flex flex-row px-0 shadow-lg">
            <div className="d-flex flex-column bg-new text-white">
              <span className="icons-span">
                <i className="fa-solid fa-user-graduate"></i>
              </span>
              <span className="icons-span">
                <i className="fa-solid fa-briefcase"></i>
              </span>
              <span className="icons-span">
                <i className="fa-sharp fa-solid fa-code"></i>
              </span>
              <span className="icons-span">
                <i className="fa-solid fa-list-check"></i>
              </span>
            </div>
            <div className="d-flex flex-column bg-white">
              <span
                className={
                  education === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setEducation, true);
                }}
              >
                Education
              </span>
              <span
                className={
                  worksHistory === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setWorksHistory, true);
                }}
              >
                Works
              </span>
              <span
                className={
                  programmings === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setProgrammings, true);
                }}
              >
                Programming
              </span>
              <span
                className={
                  projects === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setProjects, true);
                }}
              >
                Projects
              </span>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 resume-right-section">
            {education === true && <Education />}
            {worksHistory === true && <Works />}
            {programmings === true && <Programming />}
            {projects === true && <Projects />}
          </div>
        </div>
      </div>

      {/* testimonials section */}
      <div className="testimonials-part my-5" id="testimonial">
        <div className="testimonials-inner-part d-flex flex-column">
          <span className="about-me-text">Testimonials</span>
          <span className="why-text-sub mb-5">
            What my clients say about me
          </span>
          <Testimonials />
        </div>
      </div>

      {/* contact me section */}
      <div className="contact-me-part" id="contact-me">
        <div className="relative-bg"></div>
        <div className="contact-inner-part d-flex flex-column">
          <span className="about-me-text">Contact Me</span>
          <span className="why-text-sub mb-5">Lets Keep in Touch</span>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
