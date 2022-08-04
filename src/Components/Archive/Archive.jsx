import React from "react";
import { Container, Col } from "reactstrap";
import "./Archive.css";

const Archive = () => {
  return (
    <>
      <section className="common_section">
        <Container>
          <Col className="archive_wrapper">
            {/* Archive image area starts from here */}
            <div className="archive_img_and_items">
              <div className="archive_items">
                <div className="archive_items_left">
                  <div className="archive_item box_1">
                    <p>Customers</p>
                    <h2>
                      200<span id="different">+</span>
                    </h2>
                  </div>

                  <div className="archive_item box_2">
                    <p>Total Invest</p>
                    <h2>
                      <span>$</span>15<span>M</span>
                    </h2>
                  </div>
                </div>
                <div className="archive_items_right">
                  <div className="archive_item box_3">
                    <p>Happy Client</p>
                    <h2>
                      90<span>K</span>
                    </h2>
                  </div>

                  <div className="archive_item box_4">
                    <p>Project Done</p>
                    <h2>
                      25<span>K+</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            {/* Archive image area ends here */}

            {/* Archive contents area starts from here */}
            <div className="archive_contents">
              <div className="archive_Titles">
                <h4 className="common_subTitle">Archive</h4>
                <h2>Create plan and innovate Collaborate</h2>
                <p>
                  Our approach has empowered local, national, and global brands
                  to grow their businesses and achieve a competitive advantage
                  and we can do the same for you.
                </p>
              </div>

              <div className="achivement mt-4">
                <div className="single_achivement">
                  <h6>12K+</h6>
                  <h5>DAILY STANDUPS</h5>
                </div>

                <div className="single_achivement">
                  <h6>10K+</h6>
                  <h5>USER STORIES</h5>
                </div>

                <div className="single_achivement">
                  <h6>1M+</h6>
                  <h5>COMMITS</h5>
                </div>
              </div>

              <button className="archive_btn myBtn">ARCHIVE MORE</button>
            </div>
          </Col>
          {/* Archive contents area ends here */}
        </Container>
      </section>
    </>
  );
};

export default Archive;
