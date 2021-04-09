import React from "react";

import { Fade } from "react-awesome-reveal";
import Button from "elements/Button";

export default function Header() {
  return (
    <Fade duration={2000} triggerOnce={true}>
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-transparent mt-3">
            <div className="container-fluid">
              <Button className="navbar-brand" hasTextShadow href="#">
                Rizky Darma
              </Button>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Button
                      className="nav-link"
                      aria-current="page"
                      href="#home"
                      hasTextShadow
                    >
                      Home
                    </Button>
                  </li>
                  <li className="nav-item">
                    <Button className="nav-link" href="#service" hasTextShadow>
                      About Us
                    </Button>
                  </li>
                  <li className="nav-item">
                    <Button
                      className="nav-link"
                      href="#expertise"
                      hasTextShadow
                    >
                      Expertise
                    </Button>
                  </li>
                  <li className="nav-item">
                    <Button className="nav-link" href="#project" hasTextShadow>
                      Projects
                    </Button>
                  </li>
                  <li className="nav-item">
                    <Button
                      href="#contact"
                      className="btn-contact-us"
                      hasShadow
                    >
                      Contact Us
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  );
}
