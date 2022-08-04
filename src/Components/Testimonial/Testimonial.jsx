import React from "react";
import { Col, Container } from "reactstrap";
import { CgArrowLongRight } from "react-icons/cg";
import { CgArrowLongLeft } from "react-icons/cg";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <>
      <section className="common_section testimonial_section">
        <Container>
          <Col>
            <div className="testimonial_wrapper">
              {/* Testimonial titles area starts from here */}
              <div className="testimonial_titles">
                <h4 className="common_subTitle">Testimonial</h4>
                <h2>What Our core client say ?</h2>
              </div>
              {/* Testimonial titles area ends here */}

              {/* Testimonial contents area starts from here */}
              <div className="testimonial_contents_wrapper shadow common_items_hover">
                <div className="testimonial_quote">
                  <p>
                    Our approach has empowered local, national, and global
                    brands to grow their businesses and achieve a competitive
                    advantage
                  </p>
                </div>

                <div className="testimonial_provider_details text-center">
                  <p className="provider_name">Mahfuz Riad</p>
                  <small>Ui Designer & CEO</small>
                </div>
              </div>

              <div className="testimonial_icon_btn ">
                <div className="arrow_left common_items_hover">
                  <CgArrowLongLeft />
                </div>

                <div className="arrow_right common_items_hover">
                  <CgArrowLongRight />
                </div>
              </div>
            </div>
          </Col>
          {/* Testimonial contents area ends here */}
        </Container>
      </section>
    </>
  );
};

export default Testimonial;
