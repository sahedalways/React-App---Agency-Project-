import React from "react";
import Container from "react-bootstrap/Container";
import heroBgStyle from "../../Assets/images/hero-bg-style.png";
import heroImg from "../../Assets/images/bg-vector.png";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero_section">
      
        <Container>
          <div>
            <div className="hero_wrapper  ">
              <div className="hero_content w-60 ps-2">
                <h1 className="mb-3">
                  Easy Business <br /> Department Management <br /> in proper
                  way
                </h1>
                <p className="text-light">
                  A team of 100+ experienced developers and designers, ready to
                  help you build your web and mobile applications.
                </p>
                <button className="myBtn mt-4">GET STARTED</button>
              </div>

              <div className="hero_img">
                <img src={heroImg} alt="heroImg" />
              </div>
            </div>
          </div>
        </Container>
        
      </section>
    </>
  );
};

export default Hero;
