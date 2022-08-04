import React from "react";

import Agency from "../Components/Agency/Agency";
import Analytics from "../Components/Analytics/Analytics";
import Archive from "../Components/Archive/Archive";
import Blog from "../Components/Blog/Blog";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Portfolio from "../Components/Portfolio/Portfolio";
import Services from "../Components/Services/Services";
import Team from "../Components/Team/Team";
import Testimonial from "../Components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Header />
      <Archive />
      <Analytics />
      <Agency />
      <Services />
      <Team />
      <Portfolio />
      <Testimonial />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
