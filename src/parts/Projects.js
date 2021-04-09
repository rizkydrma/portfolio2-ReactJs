import React from "react";
import { Fade } from "react-awesome-reveal";
import Button from "elements/Button";

export default function Projects({ data }) {
  return (
    <Fade triggerOnce={true}>
      <section className="recent-project" id="project">
        <div className="container p-5 custom-recent-project">
          <h1 className="display-3 fw-normal text-white">Recent Projects</h1>
          <p className="text-white fw-light">
            Always passionate making web app and also UI/UX
          </p>
        </div>
        <div className="container-fluid">
          <div className="row">
            {data.map((project, index) => {
              return (
                <div className="col-sm-4" key={index}>
                  <Fade delay={300 * index} triggerOnce={true}>
                    <div className="card-project position-relative">
                      <div className="img-wrapper">
                        <img
                          src={project.imageUrl}
                          alt={`project-${index}`}
                          className="img-fluid"
                        />
                      </div>
                      <div className="meta-wrapper">
                        <span className="fw-light">
                          <small>{project.date}</small>
                        </span>
                        <Button
                          type="link"
                          href="#"
                          className="stretched-link d-block"
                        >
                          <h6>{project.name}</h6>
                        </Button>
                      </div>
                    </div>
                  </Fade>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Fade>
  );
}
