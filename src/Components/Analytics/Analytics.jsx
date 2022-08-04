import React from "react";
import { Col, Container} from "react-bootstrap";
import { analyticsData } from "../../dummyData";
import "./Analytics.css";

const Analytics = () => {
  return (
    <>
      <section className="common_section">
        <Container>
          {/* Analytic title area starts from here */}
          <div className="analytic_titles">
            <h2>We Are Fantasy We've got you covered on</h2>
            <button className="myBtn analyticBtn">LEARN MORE</button>
          </div>
          {/*Analytic title area ends here */}

          {/* Analytics contents area starts from here */}
          <Col className="analytics_contents grid">
            {analyticsData.map((val) => (
              <div
                className="shadow analytic_items common_items_hover"
                key={val.id}
              >
                <div className="analytic_item_icon">
                  <img src={val.icon} alt={val.itemName} />
                </div>
                <div className="analytic_item_name">
                  <h3>{val.itemName}</h3>
                </div>

                <div className="analytic_item_desc">
                  <p>{val.desc}</p>
                </div>

                <div className="analytic_item_list">
                  {val.analyticsList.map((item, index) => (
                    <ul key={index}>
                      <li>
                        <p className="analytic_list_item_name">
                          <div className="list_symbol">
                            <span>+</span>
                          </div>

                          {item.list1}
                        </p>
                        <p className="analytic_list_item_name">
                          <div className="list_symbol">
                            <span>+</span>
                          </div>
                          {item.list2}
                        </p>
                        <p className="analytic_list_item_name">
                          <div className="list_symbol">
                            <span>+</span>
                          </div>
                          {item.list3}
                        </p>
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
            ))}
          </Col>
          {/* Analytics contents area ends here */}
        </Container>
      </section>
    </>
  );
};

export default Analytics;
