import React from "react";
import "./ExperienceComp.css";
const ExperienceComp = () => {

  
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Amazon",
      years: "June 2021 - August 2021",
      desc: [
        "Worked on the development of a web application using NodeJS and Express framework for user authentication.",
        "Worked on developing a web application using NodeJS and Express for user authentication.",
        "Participated in designing the database schema for storing user data, including name, email address, password, etc.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Amazon",
      years: "June 2021 - August 2021",
      desc: [
        "Worked on the development of a web application using NodeJS and Express framework for user authentication.",
        "Worked on developing a web application using NodeJS and Express for user authentication.",
        "Participated in designing the database schema for storing user data, including name, email address, password, etc.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Amazon",
      years: "June 2021 - August 2021",
      desc: [
        "Worked on the development of a web application using NodeJS and Express framework for user authentication.",
        "Worked on developing a web application using NodeJS and Express for user authentication.",
        "Participated in designing the database schema for storing user data, including name, email address, password, etc.",
      ],
    },
  ];
  return (
    <div className="experience-container">
      <h1>Experiences</h1>
      <div className="timeline">
        

        {experiences.map((experience, index) => (
          <div className="">
            
            <div className="content">
              
              <h3 key={index}>{experience.title} </h3>
              <h5>{experience.company}</h5>
              <p>{experience.years}</p>
              <ul>
                {experience.desc.map((desc, descIndex) => (
                  <li key={descIndex}>{desc}</li>
                ))}
              </ul>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceComp;
