import React from "react";
import { Col, Container } from "react-bootstrap";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <>
      <section className="common_section">
        <Container fluid className="portfolio_container">
          {/* Portfolio title area starts from here */}
          <div className="portfolio_title">
            <h2>
              We have done lot of <span>Agency Task</span>
            </h2>
          </div>
          {/* Footer title area ends here */}

          {/* portfolio wrapper */}
          <Col className="portfolio_wrapper grid">
            {/* Footer images area starts from here */}
            <div className="portfolio_img"></div>

            <div className="portfolio_img"></div>

            <div className="portfolio_img"></div>
            {/* Footer images area ends here */}
          </Col>

          {/* portfolio btn */}
          <div className="portfolio_btn">
            <button className="myBtn2">Agency More Task</button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Portfolio;
