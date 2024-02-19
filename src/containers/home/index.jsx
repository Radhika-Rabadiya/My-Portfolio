import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import { RiWhatsappFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { Link } from "react-router-dom";
import "./style.scss";
import mypdf from "./resume.txt";
const Home = () => {
  const navigate = useNavigate();
  // console.log(navigate);

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Radhika
          <br />A seasoned developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{ transform: "translateY(550px)" }}
        end={{ transform: "translateX(0px)" }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMePage}>Hire Me</button>
          <a href={mypdf} download="My_File.txt">
            Resume
          </a>
        </div>
        <div className="home__contact-me_icons">
          <Link
            className="home__contact-me_icons-inner"
            to={"https://whatsapp.com"}
            target="_blank"
            // rel="no opener no referrer"
          >
            <RiWhatsappFill size={25} />
          </Link>
          <Link
            className="home__contact-me_icons-inner"
            to={"https://instagram.com"}
            target="_blank"
            // rel="no opener no referrer"
          >
            <FaInstagram size={25} />
          </Link>{" "}
          <Link
            className="home__contact-me_icons-inner"
            to={"https://twitter.com"}
            target="_blank"
            // rel="no opener no referrer"
          >
            <IoLogoTwitter size={25} />
          </Link>
          <Link
            className="home__contact-me_icons-inner"
            to={"https://facebook.com"}
            target="_blank"
            // rel="no opener no referrer"
          >
            <IoLogoFacebook size={25} />
          </Link>
          <Link
            className="home__contact-me_icons-inner"
            to={"https://linkedin.com"}
            target="_blank"
            // rel="no opener no referrer"
          >
            <IoLogoLinkedin size={25} />
          </Link>
        </div>
      </Animate>
    </section>
  );
};
export default Home;
