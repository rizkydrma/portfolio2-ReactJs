import React from "react";
import { Fade } from "react-awesome-reveal";
import Button from "elements/Button";

export default function Footer() {
  return (
    <Fade delay={2000} triggerOnce={true}>
      <footer>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10">
              <ul className="footer-nav">
                <li className="nav-item">
                  <Button href="#home" className="nav-link">
                    Home
                  </Button>
                </li>
                <li className="nav-item">
                  <Button href="#service" className="nav-link">
                    Service
                  </Button>
                </li>
                <li className="nav-item">
                  <Button href="#expertise" className="nav-link">
                    Expertise
                  </Button>
                </li>
                <li className="nav-item">
                  <Button href="#project" className="nav-link">
                    Projects
                  </Button>
                </li>
              </ul>
            </div>
            <div className="col-10">
              <ul className="footer-icon">
                <li className="item-icon">
                  <a href="/" className="link-icon">
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
                <li className="item-icon">
                  <a href="/" className="link-icon">
                    <i className="bi bi-twitter"></i>
                  </a>
                </li>
                <li className="item-icon">
                  <a href="/" className="link-icon">
                    <i className="bi bi-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-10 text-center">
              <span className="text-footer">
                Design with <i className="bi bi-heart-fill"></i> by Rizky Darma
                Razak 2021.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </Fade>
  );
}
