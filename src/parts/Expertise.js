import React from "react";
import { Fade } from "react-awesome-reveal";
import Fragment3 from "assets/images/fragment/fragment-2.png";

export default function Expertise({ data }) {
  return (
    <Fade triggerOnce={true}>
      <section className="expertise position-relative" id="expertise">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h5>Skills</h5>
              <h1>Expertise</h1>
            </div>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-sm-5">
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title text-center">Basic</h5>
                  {data.basic.map((skill, index) => {
                    return (
                      <div className="progress-custom" key={index}>
                        <Fade delay={500 * index} triggerOnce={true}>
                          <h6 className="d-inline-block progress-label">
                            {skill.label}
                          </h6>
                          <div className="progress">
                            <div
                              className={`progress-bar ${skill.color}`}
                              style={{ width: skill.point + `%` }}
                              role="progressbar"
                              aria-valuenow={skill.point}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </Fade>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title text-center">Framework/Library</h5>
                  {data.framework.map((skill, index) => {
                    return (
                      <div className="progress-custom" key={index}>
                        <Fade delay={500 * index} triggerOnce={true}>
                          <h6 className="d-inline-block progress-label">
                            {skill.label}
                          </h6>
                          <div className="progress">
                            <div
                              className={`progress-bar ${skill.color}`}
                              style={{ width: skill.point + `%` }}
                              role="progressbar"
                              aria-valuenow={skill.point}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </Fade>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src={Fragment3}
          alt="fragment-3"
          style={{ width: "15vw", zIndex: -2 }}
          className="position-absolute bottom-0 end-0"
        />
      </section>
    </Fade>
  );
}
