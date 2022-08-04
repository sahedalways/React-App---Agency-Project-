import React, { useRef } from "react";
import Container from "react-bootstrap/Container";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import heroBgStyle from "../../Assets/images/hero-bg-style.png";
import Hero from "../Hero/Hero";
import { navLinks } from "../../dummyData";
import "./Header.css";

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active_menu");

  return (
    <header className="header">
      <Container className="headerContainer">
        <div className="navigation">
          {/* logo area starts */}
          <div className="logo_area">
            <h2>Kabbo</h2>
          </div>

          {/* navmenu area starts from here */}
          <div className="nav_menu " ref={menuRef}>
            <div className="nav_list_wrapper d-flex align-items-center gap-5">
              <ul className="nav_list">
                {navLinks.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <a href={item.url} onClick={menuToggle}>
                      {item.display}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="cart_icon">
                <BsCart4 />

                <span className="badge">2</span>
              </div>

              <div className="menu_right">
                <div className="custom_search">
                  <span>
                    <AiOutlineSearch />
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* navmenu area ends here */}

          {/* mobile menu area starts from here */}
          <div className="mobile_menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
          {/* mobile menu area ends here */}
        </div>
      </Container>
      <div className="hero_bg_style">
        <img src={heroBgStyle} className="hero_Bg_Style1" alt="heroBgStyle" />
      </div>
      {/* hero component starts */}
      <Hero />
    </header>
  );
};

export default Header;
