import React from "react";
import { IoIosCheckbox, IoMdDownload } from "react-icons/io";
import "./ContactComp.css";
import { SiGeeksforgeeks, SiGithub, SiGmail, SiHackerrank, SiLeetcode, SiLinkedin, SiMailchimp } from 'react-icons/si'
const ContactComp = () => {
  return (
    <div className="contact-container" id="contact">
    
      <div className="hire-container">
        <div className="title-ad">
        <h2>
          Wanna <span>Hire me?</span>
        </h2>
        
        </div>
        <div className="buttons">
          <button className="btn">
            Download my Resume
            <IoMdDownload style={{ paddingLeft: "3vh" }} />
          </button>
          <button className="btn">
            Hire Me Now!
            <IoIosCheckbox style={{ paddingLeft: "3vh" }} />
          </button>
        </div>
      </div>
      <div className="contact-me">
      
        <div className="tech-icons">
        <h2 className="otro-blockquote" style={{border:"0"}}>My coding profiles</h2>
          <a href="" ><SiLeetcode className="tech-icon"/></a>

          <a href=""><SiLinkedin  className="tech-icon"/></a>
          <a href=""><SiGithub  className="tech-icon"/></a>
          <a href=""><SiHackerrank className="tech-icon"/></a>
          <a href=""><SiGeeksforgeeks className="tech-icon"/></a>
          <a href=""><SiGmail className="tech-icon"/></a>
          
        </div>
       
      </div>
      <footer>Conact me in lathikasunder11@gmail.com</footer>
    </div>
  );
};

export default ContactComp;
