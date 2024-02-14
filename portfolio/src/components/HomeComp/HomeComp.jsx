// HomeComp.jsx

import React from "react";
import "./HomeComp.css";
import { IoIosCheckbox, IoMdDownload } from "react-icons/io";

const HomeComp = () => {

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
    <div className="home-container" id="about">
      <div className="profile-image">
        {/* Replace the 'your-image-path.jpg' with the actual path to your profile image */}
        <img src="/lathika-image.jpg" alt="Profile" />
      </div>
      <div className="about">
        <h1>Software <span style={{color:"#78a2c0"}}>Developer</span></h1>
     
     
        <blockquote className="otro-blockquote">
          Creativity is just connecting things. 
          {/* <span>Steve Jobs</span> */}
        </blockquote>
        <p>
          Hi ,This is Lathika, a software engineer, I dance with code,
          orchestrate algorithms, and breathe life into digital realms. My
          journey began with a curious mind and a keyboard—each line of code a
          brushstroke on the canvas of possibility.
          
        </p>
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
      <hr />
    </div>
  );
};

export default HomeComp;
