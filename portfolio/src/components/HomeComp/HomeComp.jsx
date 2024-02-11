// HomeComp.jsx

import React from "react";
import "./HomeComp.css";

const HomeComp = () => {
  return (
    <div className="home-container">
      <div className="profile-image">
        {/* Replace the 'your-image-path.jpg' with the actual path to your profile image */}
        <img src="/lathika-image.jpg" alt="Profile" />
      </div>
      <div className="about">
        <h1>Software <span style={{color:"#78a2c0"}}>Developer</span></h1>
     
        <br />
        <blockquote class="otro-blockquote">
          Creativity is just connecting things. 
          {/* <span>Steve Jobs</span> */}
        </blockquote>
        <p>
          Hi ,This is Lathika, a software engineer, I dance with code,
          orchestrate algorithms, and breathe life into digital realms. My
          journey began with a curious mind and a keyboard—each line of code a
          brushstroke on the canvas of possibility.
        </p>
      </div>
      <hr />
    </div>
  );
};

export default HomeComp;
