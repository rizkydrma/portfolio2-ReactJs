import React from "react";

import { Fade } from "react-awesome-reveal";
import Button from "elements/Button";

export default function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = React.useState(false);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
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
                className={`navbar-toggler ${
                  !isNavCollapsed ? "collapsed" : ""
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded={!isNavCollapsed ? true : false}
                aria-label="Toggle navigation"
                onClick={handleNavCollapse}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className={`navbar-collapse collapse ${
                  isNavCollapsed ? "show" : ""
                } `}
                id="navbarNav"
              >
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
                      Service
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
