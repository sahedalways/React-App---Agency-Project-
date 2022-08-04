import React from "react";
import { Col, Container } from "react-bootstrap";
import agencyAboutIcon from "../../Assets/images/agency-about-icon.png";
import agencyAboutRightImage from "../../Assets/images/agency-about-bg.jpg";

import "./Agency.css";

const Agency = () => {
  return (
    <>
      <section className="common_section">
        <div className="agency_about_bg_img">
          <Container>
            <Col className="agency_about_wrapper">
              {/* agency about contents area starts from here */}
              <div className="agency_about_contents">
                <div className="agency_contents_icon">
                  <img src={agencyAboutIcon} alt="agencyAboutIcon" />
                </div>

                <h4 className="agency_about_subTitle">Creative Agency </h4>
                <h2>
                  Creating a workplace environment of transparency ownership
                </h2>
                <p>
                  We build results-oriented brand strategies and continually
                  refine your campaigns for the greatest outcome. From
                  full-scale digital marketing and advertising strategy, right
                  through to our precise execution and reporting...that's right,
                  we've got you covered
                </p>

                {/* agency about btn */}
                <button className="agency_about_btn myBtn2">
                  Read Success Story
                </button>
              </div>
              {/* agency about contents area ends here */}

              {/* agency about area starts from here */}
              <div className="agency_about_img">
                <img src={agencyAboutRightImage} alt="agencyAboutRightImage" />
              </div>
            </Col>
            {/* agency about image area ends here */}
          </Container>
        </div>
      </section>
    </>
  );
};

export default Agency;
