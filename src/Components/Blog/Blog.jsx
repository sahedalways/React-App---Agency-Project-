import React from "react";
import { Col, Container } from "reactstrap";
import "./Blog.css";

const Blog = () => {
  return (
    <>
      <section className="common_section">
        <Container className="blog_container">
          {/* blog title area starts from here */}
          <div className="blog_title">
            <h2>Our blog posts</h2>
          </div>
          {/* blog title area ends here */}

          {/* blog wrapper */}
          <Col className="blog_wrapper grid">
            {/* blog contents area starts from here */}
            <div className="blog_items shadow common_items_hover">
              <div className="blog_items_img"></div>
              <div className="blog_contents">
                <div className="blog_contents_title">
                  <p>A good content strategy can help engage your consumers</p>
                </div>
                <div className="blog_contents_desc">
                  <small>
                    A good content strategy can help engage your consumers and
                    position your company as an effective
                  </small>
                </div>
                <div className="blog_contents_date shadow">
                  <div className="day">
                    <h4>24</h4>
                  </div>
                  <div className="month">
                    <h5>Sep</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="blog_items shadow common_items_hover">
              <div className="blog_items_img"></div>
              <div className="blog_contents">
                <div className="blog_contents_title">
                  <p>Generate highly targeted contact lists using custom</p>
                </div>
                <div className="blog_contents_desc">
                  <small>
                    A good content strategy can help engage your consumers and
                    position your company as an effective
                  </small>
                </div>
                <div className="blog_contents_date shadow">
                  <div className="day">
                    <h4>24</h4>
                  </div>
                  <div className="month">
                    <h5>Sep</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="blog_items shadow common_items_hover">
              <div className="blog_items_img"></div>
              <div className="blog_contents">
                <div className="blog_contents_title">
                  <p>Forecast Demand, Automate Purchasing</p>
                </div>
                <div className="blog_contents_desc">
                  <small>
                    A good content strategy can help engage your consumers and
                    position your company as an effective
                  </small>
                </div>
                <div className="blog_contents_date shadow">
                  <div className="day">
                    <h4>24</h4>
                  </div>
                  <div className="month">
                    <h5>Sep</h5>
                  </div>
                </div>
              </div>
            </div>
            {/* blog contents area ends here */}
          </Col>
        </Container>
      </section>
    </>
  );
};

export default Blog;
