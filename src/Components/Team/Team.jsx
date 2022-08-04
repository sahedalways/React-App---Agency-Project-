import React from "react";
import { Col, Container } from "react-bootstrap";
import { teamData } from "../../dummyData";
import "./Team.css";

const Team = () => {
  return (
    <>
      <section className="common_section">
        <Container>
          {/* Team member details starts from here */}
          <Col className="team_member_details grid">
            {teamData.map((item, index) => (
              // team member wrapper
              <div className="team_member_wrapper" key={index}>
                <div className="team_member_img common_items_hover">
                  <img src={item.image} alt={item.itemName} />
                </div>
                {/* team member name */}
                <div className="team_member_name">
                  <h3>{item.name}</h3>
                </div>

                {/* team member designation */}
                <div className="team_member_designation">
                  <h4 className="common_subTitle">{item.designation}</h4>
                </div>
              </div>
            ))}
          </Col>
          {/* Team member details ends here */}
        </Container>
      </section>
    </>
  );
};

export default Team;
