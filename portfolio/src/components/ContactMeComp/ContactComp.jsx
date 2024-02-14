import React from "react";
import { IoIosCheckbox, IoMdDownload } from "react-icons/io";
import "./ContactComp.css";
import {
  SiGeeksforgeeks,
  SiGithub,
  SiGmail,
  SiHackerrank,
  SiLeetcode,
  SiLinkedin,
} from "react-icons/si";
const ContactComp = () => {
  const handleDownload=()=>{
    const resume= window.location.origin + '/Lathika-Sunder-Resume.pdf';

    const link=document.createElement("a");
    link.href=resume;
    link.download="Lathika Sunder Resume"
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link)

  }
  return (
    <div className="contact-container" id="contact">
      <div className="hire-container">
        <div className="title-ad">
          <h2>
            Wanna <span>Hire me?</span>
          </h2>
        </div>
        <div className="buttons">
          <button className="btn" onClick={handleDownload}>
            Download my Resume
            <IoMdDownload style={{ paddingLeft: "3vh" }} />
          </button>
          <a
            href="mailto:lathikasunder11@gmail.com?subject=Interested%20to%20hire%20you&body=Hello%20Lathika,%0D%0AI%20am%20interested%20to%20hire%20you..."
            target="_blank"
          ><button className="btn">
            
            Hire Me Now!
            <IoIosCheckbox style={{ paddingLeft: "3vh" }} />
          </button></a>
          
        </div>
      </div>
      <div className="contact-me">
        <div className="tech-icons">
          <h2 className="otro-blockquote" style={{ border: "0" }}>
            My coding profiles
          </h2>
          <a href="https://leetcode.com/lathika-sunder/" target="_blank">
            <SiLeetcode className="tech-icon" />
          </a>
          <a href="https://www.linkedin.com/in/lathika-sunder/" target="_blank">
            <SiLinkedin className="tech-icon" />
          </a>
          <a href="https://github.com/lathika-sunder/" target="_blank">
            <SiGithub className="tech-icon" />
          </a>
          <a
            href="https://www.hackerrank.com/profile/lathikasunder11"
            target="_blank"
          >
            <SiHackerrank className="tech-icon" />
          </a>
          <a
            href="https://auth.geeksforgeeks.org/user/lathikasunder11"
            target="_blank"
          >
            <SiGeeksforgeeks className="tech-icon" />
          </a>
          <a
            href="mailto:lathikasunder11@gmail.com?subject=Interested%20to%20hire%20you&body=Hello%20Lathika,%0D%0AI%20am%20interested%20to%20hire%20you..."
            target="_blank"
          >
            <SiGmail className="tech-icon" />
          </a>
        </div>
      </div>
      <footer>Conact me in lathikasunder11@gmail.com</footer>
    </div>
  );
};

export default ContactComp;
