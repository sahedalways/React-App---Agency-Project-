import React from "react";
import { Container } from "react-bootstrap";
import { GrFacebookOption } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
import { GrDribbble } from "react-icons/gr";
import { MdOutlineArrowRight } from "react-icons/md";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { footerAboutCompanyLinks } from "../../dummyData";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <section className="common_section footer_section">
          <Container>
            <div className="footer_wrapper">
              {/* Footer top area starts from here */}

              <div className="footer_top">
                <div className="logo_area">
                  <h2 className="logo">Kabbo</h2>
                </div>
                <div className="select_language">
                  <label for="cars">Language : </label>

                  <select id="language">
                    <option value="English (UK)">English (UK)</option>
                    <option value="Bengali">Bengali</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Arabic">Arabic</option>
                  </select>
                </div>

                <div className="footer_top_menu_list">
                  <ul>
                    <li>
                      <a href="#">CAREERS</a>
                    </li>
                    <li>
                      <a href="#">CONTACT</a>
                    </li>
                    <li>
                      <a href="#">PRIVACY</a>
                    </li>
                  </ul>
                </div>

                <div className="footer_top_socials">
                  <span className="shadow">
                    <GrFacebookOption />
                  </span>
                  <span className="shadow">
                    <GrTwitter />
                  </span>

                  <span className="shadow">
                    <GrDribbble />
                  </span>
                </div>
              </div>
              {/* Footer top area ends here */}

              {/* Footer Information area starts from here */}
              <div className="footer_information">
                <div className="footer_info_title">
                  <h6 className="footer_titles">Information</h6>
                </div>

                <div className="footer_info_list">
                  <small>113 momo Street, bd 721 NY 20012</small>
                  <small>kabbohelp@gmail.com</small>
                  <h6 className="footer_contact_number">+88 (0) 29292162</h6>
                </div>
              </div>
              {/* Footer Information area ends here */}

              {/* Footer about area starts from here */}
              <div className="footer_about">
                <div className="footer_about_title">
                  <h6 className="footer_titles">About Company</h6>
                </div>
                <div className="footer_about_menu_list">
                  {footerAboutCompanyLinks.map((item, index) => (
                    <ul key={index}>
                      <li>
                        <a href="#">{item.display}</a>
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
              {/* Footer about area ends here */}

              {/* Footer stayInLoop area starts from here */}
              <div className="footer_stayInLoop">
                <div className="footer_stayInLoop_title">
                  <h6 className="footer_titles">Stay In Loop</h6>
                </div>

                <div className="footer_stayInLoop_desc">
                  <small>
                    Subscribe to receive biweekly tips on creative automation
                    and digital advertising!
                  </small>
                </div>

                <div className="footer_stayInLoop_input">
                  <input
                    className="shadow"
                    type="text"
                    placeholder="What's Your email"
                  />
                  <span>
                    <MdOutlineArrowRight />
                  </span>
                </div>
              </div>
              {/* Footer stayInLoop area ends here */}
            </div>

            {/* Footer bottom area starts from here */}
            <div className="footer_bottom">
              <div className="footer_bottom_download_area">
                <h6 className="shadow">
                  <span>
                    <FaApple />
                  </span>
                  App Store
                </h6>

                <h6 className="shadow">
                  <span>
                    <FaGooglePlay />
                  </span>
                  Play Store
                </h6>
              </div>

              <div className="footer_bottom_copyright_area">
                <h5>&copy; 2022 All rights reserved by Sk Sahed Ahmed.</h5>
              </div>
            </div>
            {/* Footer bottom area ends here */}
          </Container>
        </section>
      </footer>
    </>
  );
};

export default Footer;
