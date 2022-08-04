import React from "react";
import { Col, Container } from "react-bootstrap";
import { servicesData } from "../../dummyData";
import "./Services.css";

const Services = () => {
  return (
    <>
      <section className="common_section">
        <div className="services_bg_img">
          <Container>
            <Col className="services_wrapper">
              {/* services titles area starts from here */}
              <div className="services_titles">
                <h4 className="common_subTitle">OUR SERVICES</h4>
                <h2>Experience design agency in Kabbo</h2>

                <button className="services_titles_btn myBtn">LOAD MORE</button>
              </div>
              {/*  services titles area ends here */}

              {/* services contents starts from here */}
              <div className="services_contents">
                {servicesData.map((item, index) => (
                  <div className="shadow services_items common_items_hover" key={index}>
                    <div className="analytic_item_icon">
                      <img src={item.icon} alt={item.itemName} />
                    </div>
                    <div className="services_item_name">
                      <h3>{item.itemName}</h3>
                    </div>

                    <div className="services_item_desc">
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
            {/* services contents area ends here */}
          </Container>
        </div>
      </section>
    </>
  );
};

export default Services;
