import React from "react";
import { Fade } from "react-awesome-reveal";
import Button from "elements/Button";

import Fragment1 from "assets/images/fragment/fragment.png";
import Fragment2 from "assets/images/fragment/fragment-1.png";
import ImageDeveloper from "assets/images/icons/img-developer.png";
import ImageDesign from "assets/images/icons/img-design.png";
import ImageUIUX from "assets/images/icons/img-uiuix.png";

export default function Service({ data }) {
  return (
    <Fade direction={"bottom"} triggerOnce={true} duration={2000}>
      <section className="service" id="service">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 custom-service mb-3">
              <h1 className="title">{data.title}</h1>
              <h1 className="sub-title">{data.subtitle}</h1>
              <p className="text-content">
                <small>{data.content}</small>
              </p>
              <Button href="#" className="btn-download" hasShadow>
                Download My CV
              </Button>
            </div>
            <div className="col-md-8 text-center card-group-custom">
              <img
                src={Fragment1}
                alt="fragment-1"
                className="fragment fragment-service"
              />
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <div className="card shadow card-developer">
                    <img
                      src={ImageDeveloper}
                      className="card-img-top"
                      alt="service developer"
                    />
                    <div className="card-body">
                      <h6 className="card-title">Developer</h6>
                      <p className="text-content">
                        <small>
                          Some quick example text to build on the card title and
                          Lorem ipsum dolor sit amet.
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="card shadow card-design">
                    <img
                      src={ImageDesign}
                      className="card-img-top"
                      alt="service design"
                    />
                    <div className="card-body">
                      <h6 className="card-title">Graphic Design</h6>
                      <p className="text-content">
                        <small>
                          Some quick example text to build on the card title and
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Officiis, doloribus?
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="card shadow card-uiux">
                    <img
                      src={ImageUIUX}
                      className="card-img-top"
                      alt="service ui uix"
                    />
                    <div className="card-body">
                      <h6 className="card-title">UI/UX Design</h6>
                      <p className="text-content">
                        <small>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Dolorem, sint!
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={Fragment2} alt="fragment 2" className="fragment-1" />
      </section>
    </Fade>
  );
}
