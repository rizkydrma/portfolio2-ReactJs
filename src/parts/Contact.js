import React from "react";
import { Fade } from "react-awesome-reveal";
import Button from "elements/Button";

import Fragment4 from "assets/images/fragment/fragment-3.png";
import Fragment5 from "assets/images/fragment/fragment-4.png";

export default function Contact() {
  return (
    <Fade delay={2000} triggerOnce={true}>
      <section className="contact position-relative" id="contact">
        <img
          src={Fragment4}
          alt="fragment-4"
          className="position-absolute top-0 start-0"
          style={{ width: "23vw", marginTop: -50, zIndex: -5 }}
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <div className="card shadow">
                <div className="card-title text-center">
                  <h5>Feel free to contact me and say hello!</h5>
                </div>
                <div className="card-body text-center">
                  <form>
                    <div className="mb-5">
                      <input
                        type="text"
                        className="custom-form"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="mb-5">
                      <input
                        type="email"
                        className="custom-form"
                        placeholder="Email address"
                      />
                    </div>
                    <div className="mb-5">
                      <textarea
                        name="message"
                        id="message"
                        cols="20"
                        rows="8"
                        placeholder="Your Message Here"
                        className="custom-form"
                      ></textarea>
                    </div>
                    <Button type="button" href="#" className="btn-contact">
                      Send Your Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src={Fragment5}
          alt="fragment-5"
          className="position-absolute bottom-0 end-0"
          style={{ width: "22vw", zIndex: -2, marginBottom: -200 }}
        />
      </section>
    </Fade>
  );
}
