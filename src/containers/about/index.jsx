import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./style.scss";
import { IoLogoNodejs } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { BiLogoJavascript } from "react-icons/bi";

const personalDetails = [
  { label: "Name", value: "Radhika Rabadiya" },
  { label: "Age", value: "00" },
  { label: "Address", value: "India" },
  { label: "Email", value: "abc@gmail.com" },
  { label: "Contact", value: "123456789" },
];

const jobSummary =
  " Greetings! I'm, a seasoned developer with a passion for  digital solutions. After gaining valuable experience in the industry and taking a two-year hiatus, I am thrilled to embark on a new chapter in my career journey. Now, reacharged and armed with updated skills, I am enthusiastic about re-entering the workforce. I am actively seeking opportunities that allow me to leverage my expertise in developing and contribute to innovative projects, and continue my professional growth.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(-900px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3>Full Stack Web Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(600px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(500px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <BiLogoJavascript
                  size={60}
                  color="var(--yellow-theme-main-color)"
                />
              </div>

              <div>
                <RiReactjsLine
                  size={60}
                  color="var(--yellow-theme-main-color)"
                />
              </div>

              <div>
                <SiMongodb size={60} color="var(--yellow-theme-main-color)" />
              </div>

              <div>
                <IoLogoNodejs
                  size={60}
                  color="var(--yellow-theme-main-color)"
                />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
