import React from "react";

import { Fade } from "react-awesome-reveal";
import Button from "elements/Button";

import ImageHero from "assets/images/img-hero.png";

export default function Hero({ data }) {
  return (
    <Fade direction={"up"} triggerOnce={true} duration={2000}>
      <section className="hero" id="home">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 order-2 order-md-1 custom-col-left">
              <h1 className="fw-normal text-greeting">{data.greeting}</h1>
              <h1 className="fw-normal text-name">{data.name}</h1>
              <p className="text-content">
                <small>{data.introduce}</small>
              </p>
              <Button href="#" className="btn-hire-me" hasShadow>
                Hire Me !
              </Button>
            </div>
            <div className="col-md-6 order-1 order-md-2 custom-col-right text-center">
              <div className="dot-group position-relative">
                <div className="dot dot-orange dot-one position-absolute top-0 start-0"></div>
                <div className="dot dot-blue dot-two position-absolute top-0 end-0"></div>
              </div>
              <figure>
                <img
                  className="img-fluid img-hero"
                  src={ImageHero}
                  alt="hero"
                />
              </figure>
              <div className="dot-group position-relative">
                <div className="dot dot-orange dot-three position-absolute top-0 start-0"></div>
                <div className="dot dot-blue dot-four position-absolute top-0 end-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
